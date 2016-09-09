/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Widgets from './Widgets';

export default {

  path: '/widgets',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: 'Widgets | Admin Dev Kit',
      pageTitle: 'Widgets Page',
      pageSubTitle: 'Optional description',
    };

    return <Widgets content={content} />;
  },

};
