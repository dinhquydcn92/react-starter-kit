/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html';
import {ErrorPage} from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import passport from './core/passport';
import models from './data/models';
import schema from './data/schema';
import routes from './routes';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import {port, auth} from './config';

const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator           = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(expressJwt({
  secret: auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token,
}));
app.use(passport.initialize());

app.get('/login/facebook',
  passport.authenticate('facebook', {scope: ['email', 'user_location'], session: false})
);
app.get('/login/facebook/return',
  passport.authenticate('facebook', {failureRedirect: '/login', session: false}),
  (req, res) => {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token     = jwt.sign(req.user, auth.jwt.secret, {expiresIn});
    res.cookie('id_token', token, {maxAge: 1000 * expiresIn, httpOnly: true});
    res.redirect('/');
  }
);

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: {request: req},
  pretty: process.env.NODE_ENV !== 'production',
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async(req, res, next) => {
  try {
    let css        = new Set();
    let statusCode = 200;
    const data     = {
      title: '',
      description: '',
      style: '', // Specific css defined for each component
      styles: [
        '/AdminLTE/bootstrap/css/bootstrap.min.css',
        '/assets/plugins/font-awesome/css/font-awesome.min.css',
        '/assets/plugins/ionicons/dist/css/ionicons.min.css',
        '/AdminLTE/dist/css/AdminLTE.min.css',
        '/AdminLTE/dist/css/skins/skin-blue.min.css',
        '/AdminLTE/plugins/iCheck/flat/blue.css',
        '/AdminLTE/plugins/morris/morris.css',
        '/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.css',
        '/AdminLTE/plugins/datepicker/datepicker3.css',
        '/AdminLTE/plugins/daterangepicker/daterangepicker.css',
        '/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
      ], // List of css to enqueue
      classes: 'skin-blue sidebar-mini', // Body tag classes
      scripts: [
        '/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js',
        '/AdminLTE/bootstrap/js/bootstrap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',
        '/AdminLTE/plugins/morris/morris.min.js',
        '/AdminLTE/plugins/sparkline/jquery.sparkline.min.js',
        '/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        '/AdminLTE/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        '/AdminLTE/plugins/knob/jquery.knob.js',
        'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js',
        '/AdminLTE/plugins/daterangepicker/daterangepicker.js',
        '/AdminLTE/plugins/datepicker/bootstrap-datepicker.js',
        '/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        '/AdminLTE/plugins/slimScroll/jquery.slimscroll.min.js',
        '/AdminLTE/plugins/fastclick/fastclick.js',
        '/AdminLTE/dist/js/app.min.js',
        '/AdminLTE/dist/js/pages/dashboard.js',
        '/AdminLTE/dist/js/demo.js',
        assets.main.js
      ], // List of js to enqueue
      children: ''
    };

    await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query,
      context: {
        insertCss: (...styles) => {
          styles.forEach(style => css.add(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
        },
        setTitle: value => (data.title = value),
        setMeta: (key, value) => (data[key] = value),
        setBodyClasses: value => (data.classes = value),
      },
      render(component, status = 200) {
        css           = new Set();
        statusCode    = status;
        data.children = ReactDOM.renderToString(component);
        data.style    = [...css].join('');
        return true;
      },
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    res.status(statusCode);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const statusCode = err.status || 500;
  const html       = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
    {ReactDOM.renderToString(<ErrorPage content={{error: err}}/>)}
    </Html>
  );
  res.status(statusCode);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
models.sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
  });
});
/* eslint-enable no-console */
