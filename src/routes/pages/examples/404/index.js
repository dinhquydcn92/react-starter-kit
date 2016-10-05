/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Page404 from './404';

export default {

  path: '/pages/examples/404',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: '404 Page not found | Admin Dev Kit',
      pageTitle: '404 Error Page',
      pageSubTitle: '',
    };

    return {
      title: content.title,
      component: <Page404 content={content} />,
    };
  },

};
