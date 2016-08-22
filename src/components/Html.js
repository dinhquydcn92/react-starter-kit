import React, {PropTypes} from 'react';
import {analytics} from '../config';

function Html({title, description, style, script, children}) {
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
      {/*<!-- AdminLTE Skins. We have chosen the skin-blue for this starter
       page. However, you can choose any other skin. Make sure you
       apply the skin class to the body tag so the changes take effect.
       -->*/}
      <link rel="stylesheet" href="/AdminLTE/dist/css/skins/skin-blue.min.css"/>
      {/*<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->*/}
      {/*<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->*/}
      {/*<!--[if lt IE 9]>
       <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
       <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
       <![endif]-->*/}
      <style id="css" dangerouslySetInnerHTML={{__html: style}}/>
    </head>
    <body className="skin-blue sidebar-mini">
    <div id="app" className="wrapper" dangerouslySetInnerHTML={{__html: children}}/>
    {/*<!-- jQuery 2.2.3 -->*/}
    <script src="AdminLTE/plugins/jQuery/jquery-2.2.3.min.js"></script>
    {/*<!-- Bootstrap 3.3.6 -->*/}
    <script src="AdminLTE/bootstrap/js/bootstrap.min.js"></script>
    {/*<!-- AdminLTE App -->*/}
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
