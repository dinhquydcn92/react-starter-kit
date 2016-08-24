import React, {Component, PropTypes} from 'react';
import {analytics} from '../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.array,
    style: PropTypes.string,
    scripts: PropTypes.array,
    children: PropTypes.string,
  };

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description}/>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"/>
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        {this.props.styles.map(href => <link rel="stylesheet" href={href}/>)}
        <style id="css" dangerouslySetInnerHTML={{__html: this.props.style}}/>
      </head>
      <body className={this.props.classes}>
      <div id="app" dangerouslySetInnerHTML={{__html: this.props.children}}/>
      {this.props.scripts.map(src => <script src={src}></script>)}
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
}

export default Html;
