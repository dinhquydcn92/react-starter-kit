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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
          <link rel="stylesheet" href="/AdminLTE/dist/css/AdminLTE.min.css" />
          <link rel="stylesheet" href="/AdminLTE/dist/css/skins/skin-blue.min.css" />
          <link rel="stylesheet" href="/AdminLTE/plugins/iCheck/flat/blue.css" />
          <link rel="stylesheet" href="/AdminLTE/plugins/morris/morris.css" />
          <link rel="stylesheet" href="/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.css" />
          <link rel="stylesheet" href="/AdminLTE/plugins/datepicker/datepicker3.css" />
          <link rel="stylesheet" href="/AdminLTE/plugins/daterangepicker/daterangepicker.css" />
          <link
            rel="stylesheet"
            href="/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
          />
          {/* end: all css */}
          <style id="css" dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </head>
        <body className={this.props.classes || 'hold-transition skin-blue sidebar-mini'}>
          <div id="app" dangerouslySetInnerHTML={{ __html: this.props.children }} />
          {/* start: all js */}
          <script src="/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js" />
          <script src="/AdminLTE/plugins/jQueryUI/jquery-ui.min.js" />
          <script src="/AdminLTE/bootstrap/js/bootstrap.min.js" async />
          <script src="/assets/plugins/raphael/raphael.min.js" async />
          <script src="/AdminLTE/plugins/morris/morris.min.js" async />
          <script src="/AdminLTE/plugins/sparkline/jquery.sparkline.min.js" async />
          <script src="/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" async />
          <script src="/AdminLTE/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" async />
          <script src="/AdminLTE/plugins/knob/jquery.knob.js" async />
          <script
            src="/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
            async
          />
          <script src="/assets/plugins/moment/min/moment.min.js" async />
          <script src="/AdminLTE/plugins/daterangepicker/daterangepicker.js" async />
          <script src="/AdminLTE/plugins/datepicker/bootstrap-datepicker.js" async />
          <script src="/AdminLTE/plugins/fastclick/fastclick.js" async />
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
