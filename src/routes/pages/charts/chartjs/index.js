/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ChartJS from './ChartJS';

export default {

  path: '/pages/charts/chartjs',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: 'Starter | Admin Dev Kit',
      pageTitle: 'Starter Page',
      pageSubTitle: 'Optional description',
    };

    return <ChartJS content={content} />;
  },

};
