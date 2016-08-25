/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import $ from 'jquery';
import Link from '../../components/Link';
import s from './Login.css';

class Login extends Component {

  static propTypes = {
    // Wrap all content props to one parent props
    content: PropTypes.shape({
      // Document title
      title: PropTypes.string.isRequired
    }).isRequired,
    // Define page layout
    isFullWidth: PropTypes.bool,
  };

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
    setBodyClasses: PropTypes.func.isRequired,
    enqueueStyles: PropTypes.func.isRequired,
    enqueueScripts: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    if (context.setTitle) {
      context.setTitle(this.props.content.title);
    }

    if (context.setBodyClasses) {
      context.setBodyClasses('hold-transition login-page');
    }
  }

  componentWillMount() {
    if (this.context.enqueueStyles) {
      this.context.enqueueStyles([
        '/AdminLTE/plugins/iCheck/square/blue.css'
      ]);
    }

    if (this.context.enqueueScripts) {
      this.context.enqueueScripts([
        '/AdminLTE/plugins/iCheck/icheck.min.js'
      ]);
    }
  }

  componentDidMount() {
    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
      });
    });
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="/index2"><b>Admin</b>LTE</a>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="/index2" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email"/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"/>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password"/>
              <span className="glyphicon glyphicon-lock form-control-feedback"/>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox"/> Remember Me
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"/> Sign
              in using Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"/> Sign
              in using Google+</a>
          </div>
          {/* /.social-auth-links */}
          <a href="#">I forgot my password</a><br />
          <Link to="/register">Register a new membership</Link>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

export default withStyles(s)(Login);
