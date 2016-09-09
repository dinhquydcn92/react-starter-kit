import React, { Component, PropTypes } from 'react';
import { analytics } from '../config';

class Html extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    script: PropTypes.string,
    children: PropTypes.string,
    classes: PropTypes.string,
  };

  render() {
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
            name="viewport"
          />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {/* start: all css */}
          <link rel="stylesheet" href="/AdminLTE/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/plugins/font-awesome/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/assets/plugins/ionicons/dist/css/ionicons.min.css" />
          <link rel="stylesheet" href="/AdminLTE/dist/css/AdminLTE.min.css" />
          <link rel="stylesheet" href="/AdminLTE/dist/css/skins/skin-blue.min.css" />
          {/* end: all css */}
          <style id="css" dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </head>
        <body className={this.props.classes || 'hold-transition skin-blue sidebar-mini'}>
          <div id="app" dangerouslySetInnerHTML={{ __html: this.props.children }} />
          {/* start: all js */}
          <script src="/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js" />
          <script src="/AdminLTE/plugins/jQueryUI/jquery-ui.min.js" />
          <script src="/AdminLTE/bootstrap/js/bootstrap.min.js" async />
          <script
            src="/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" async
          />
          <script src="/AdminLTE/dist/js/app.min.js" async />
          {/* end: all js */}
          {this.props.script && <script src={this.props.script} />}
          {
            analytics.google.trackingId && <script
              dangerouslySetInnerHTML={{
                __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')`,
              }}
            />
          }
          {
            analytics.google.trackingId && <script
              src="https://www.google-analytics.com/analytics.js" async defer
            />
          }
        </body>
      </html>
      );
  }
}

export default Html;
