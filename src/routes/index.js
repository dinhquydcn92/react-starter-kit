/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import home2 from './home2';
import login from './login';
import register from './register';
import error from './error';

// AdminLTE starter page
import starter from './starter';

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    home,
    home2,
    login,
    register,

    // AdminLTE
    starter,

    // place new routes before...
    error,
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  },

};
