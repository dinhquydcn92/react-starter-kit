/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';

function Html({ title, description, style, script, state, lang, children, classes }) {
  return (
    <html className="no-js" lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="/AdminLTE/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/ionicons/css/ionicons.min.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/ionslider/ion.rangeSlider.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/ionslider/ion.rangeSlider.skinNice.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/bootstrap-slider/slider.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/colorpicker/bootstrap-colorpicker.min.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/timepicker/bootstrap-timepicker.min.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/select2/select2.min.css" />
        <link rel="stylesheet" href="/AdminLTE/dist/css/AdminLTE.min.css" />
        <link rel="stylesheet" href="/AdminLTE/dist/css/skins/skin-blue.min.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/iCheck/all.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/morris/morris.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/datepicker/datepicker3.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" href="/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" />
        {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
      </head>
      <body className={classes}>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script src="/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js" />
        <script src="/AdminLTE/plugins/jQueryUI/jquery-ui.min.js" />
        <script src="/AdminLTE/bootstrap/js/bootstrap.min.js" />
        <script src="/AdminLTE/plugins/select2/select2.full.min.js" />
        <script src="/AdminLTE/plugins/input-mask/jquery.inputmask.js" />
        <script src="/AdminLTE/plugins/input-mask/jquery.inputmask.date.extensions.js" />
        <script src="/AdminLTE/plugins/input-mask/jquery.inputmask.extensions.js" />
        <script src="/AdminLTE/plugins/moment/min/moment.min.js" />
        <script src="/AdminLTE/plugins/raphael/raphael.min.js" />
        <script src="/AdminLTE/plugins/morris/morris.min.js" />
        <script src="/AdminLTE/plugins/sparkline/jquery.sparkline.min.js" />
        <script src="/AdminLTE/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" />
        <script src="/AdminLTE/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" />
        <script src="/AdminLTE/plugins/knob/jquery.knob.js" />
        <script src="/AdminLTE/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" />
        <script src="/AdminLTE/plugins/daterangepicker/daterangepicker.js" />
        <script src="/AdminLTE/plugins/datepicker/bootstrap-datepicker.js" />
        <script src="/AdminLTE/plugins/colorpicker/bootstrap-colorpicker.min.js" />
        <script src="/AdminLTE/plugins/timepicker/bootstrap-timepicker.min.js" />
        {/* <script src="/AdminLTE/plugins/slimScroll/jquery.slimscroll.min.js" /> */}
        {/* <script src="/AdminLTE/plugins/fastclick/fastclick.js" /> */}
        <script src="/AdminLTE/plugins/chartjs/Chart.min.js" />
        <script src="/AdminLTE/dist/js/app.min.js" />
        <script src="/AdminLTE/plugins/flot/jquery.flot.min.js" />
        <script src="/AdminLTE/plugins/flot/jquery.flot.resize.min.js" />
        <script src="/AdminLTE/plugins/flot/jquery.flot.pie.min.js" />
        <script src="/AdminLTE/plugins/flot/jquery.flot.categories.min.js" />
        <script src="/AdminLTE/plugins/ionslider/ion.rangeSlider.min.js" />
        <script src="/AdminLTE/plugins/bootstrap-slider/bootstrap-slider.js" />
        <script src="/AdminLTE/plugins/fullcalendar/fullcalendar.min.js" />
        <script src="/AdminLTE/plugins/iCheck/icheck.min.js" />
        <script src="/AdminLTE/plugins/ckeditor/ckeditor.js" />
        {state && <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${serialize(state, { isJSON: true })}`,
          }}
        />}
        {script && <script src={script} />}
        {analytics.google.trackingId &&
          <script
            dangerouslySetInnerHTML={{ __html:
            'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
            `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
          />
        }
        {analytics.google.trackingId &&
          <script src="https://www.google-analytics.com/analytics.js" async defer />
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
  script: PropTypes.string,
  state: PropTypes.object,
  lang: PropTypes.string,
  children: PropTypes.string,
  classes: PropTypes.string,
};

export default Html;
