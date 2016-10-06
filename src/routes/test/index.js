/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Test from './Test';

export default {

  path: '/test',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: 'Test page | Admin Dev Kit',
      pageTitle: 'Test page',
      pageSubTitle: 'Just a test page',
    };

    return {
      title: content.title,
      component: <Test content={content} />,
    };
  },

};
