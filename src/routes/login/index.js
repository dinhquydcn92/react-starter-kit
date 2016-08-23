/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Login from './Login';

export default {

  path: '/login',

  action({render, context, error}) {

    let content = {
      title: 'Login',
      pageTitle: 'Login',
      pageSubTitle: '',
    };

    console.log(context);

    return render(
      <App context={context} isFullWidth={true}>
        <Login content={content}/>
      </App>
    );
  },

};
