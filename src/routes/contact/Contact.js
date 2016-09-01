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
import s from './Contact.css';

class Contact extends Component {

  static propTypes = {
    // Wrap all content props to one parent props
    content: PropTypes.shape({
      // Document title
      title: PropTypes.string.isRequired
    }).isRequired,
  };

  static contextTypes = {
    setTitle: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    if (context.setTitle) {
      context.setTitle(this.props.content.title);
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
