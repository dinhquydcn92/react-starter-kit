/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import Advanced from "./Advanced";

export default {

  path: '/pages/forms/advanced',

  action() {
    let content = { // eslint-disable-line prefer-const
      title: 'Form | Admin Dev Kit',
      pageTitle: 'Advanced Form Elements',
      pageSubTitle: 'Preview',
    };

    return <Advanced content={content}/>;
  },

};
