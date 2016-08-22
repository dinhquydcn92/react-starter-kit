import React, {PropTypes} from 'react';
import {analytics} from '../config';

function Html({title, description, style, classes, script, children}) {
  return (
    <html className="no-js" lang="">
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"/>
      <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
      <link rel="stylesheet" href="/AdminLTE/bootstrap/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="/assets/plugins/font-awesome/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="/assets/plugins/ionicons/dist/css/ionicons.min.css"/>
      <link rel="stylesheet" href="/AdminLTE/dist/css/AdminLTE.min.css"/>
      <link rel="stylesheet" href="/AdminLTE/dist/css/skins/skin-blue.min.css"/>
      <style id="css" dangerouslySetInnerHTML={{__html: style}}/>
    </head>
    <body className={classes}>
    <div id="app" className="wrapper" dangerouslySetInnerHTML={{__html: children}}/>
    <script src="AdminLTE/plugins/jQuery/jquery-2.2.3.min.js"></script>
    <script src="AdminLTE/bootstrap/js/bootstrap.min.js"></script>
    <script src="AdminLTE/dist/js/app.min.js"></script>
    {script && <script src={script}/>}
    {analytics.google.trackingId &&
    <script
      dangerouslySetInnerHTML={{
        __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
        `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')`
      }}
    />}
    {analytics.google.trackingId && <script src="https://www.google-analytics.com/analytics.js" async defer/>}
    </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  script: PropTypes.string,
  children: PropTypes.string,
};

export default Html;
