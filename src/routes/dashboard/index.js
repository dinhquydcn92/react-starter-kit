/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Starter from './Dashboard';

export default {

  path: '/dashboard',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: 'Dashboard - Admin Dev Kit',
      pageTitle: 'Dashboard',
      pageSubTitle: 'Overview Page',
    };

    return <Starter content={content} />;
  },

};
