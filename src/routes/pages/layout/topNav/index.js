/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import TopNav from './TopNav';

export default {

  path: '/pages/layout/top-nav',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: 'Top Navigation | Admin Dev Kit',
      pageTitle: 'Top Navigation',
      pageSubTitle: 'it all starts here',
    };

    return {
      title: content.title,
      component: <TopNav content={content} />,
    };
  },

};
