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
import s from './ErrorPage.css';

class ErrorPage extends Component {

  static propTypes = {
    // Wrap all props into a parent props
    content: PropTypes.shape({
      // Document title
      title: PropTypes.string.isRequired,
      // Error object
      error: PropTypes.object.isRequired,
    }).isRequired,
    // Define page layout
    isFullWidth: PropTypes.bool,
  };

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      title: 'Error',
      content: 'Sorry, a critical error occurred on this page.',
      errorMessage: null,
    };

    if (context.setTitle) {
      context.setTitle(this.props.content.title);
    }
  }

  componentWillMount() {
    if (this.props.content.error.status === 404) {
      this.setState({
        title: 'Page Not Found',
        content: 'Sorry, the page you were trying to access does not exist.',
      });
    } else if (process.env.NODE_ENV !== 'production') {
      this.setState((previousState, currentProps) => (
        { errorMessage: <pre>{currentProps.content.error.stack}</pre> }
      ));
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
        {this.state.errorMessage}
      </div>
    );
  }
}

export { ErrorPage as ErrorPageWithoutStyle };
export default withStyles(s)(ErrorPage);
