/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Profile from './Profile';

export default {

  path: '/pages/examples/profile',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: 'User Profile | Admin Dev Kit',
      pageTitle: 'User Profile',
      pageSubTitle: '#007612',
    };

    return {
      title: content.title,
      component: <Profile content={content} />,
    };
  },

};
