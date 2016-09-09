/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends Component {

  static propTypes = {
    // Wrap all props to one parent props
    content: PropTypes.shape({
      // Document title
      title: PropTypes.string.isRequired,
      // Page title
      pageTitle: PropTypes.string.isRequired,
      // Page subtitle
      pageSubTitle: PropTypes.string,
      // News object
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
      })).isRequired,
    }).isRequired,
  };

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
    setBodyClasses: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    if (context.setTitle) {
      context.setTitle(this.props.content.title);
    }

    if (context.setBodyClasses) {
      context.setBodyClasses('hold-transition skin-blue sidebar-mini');
    }
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <div>
        <p>Test</p>
      </div>
    );
  }

}

export default withStyles(s)(Home);
