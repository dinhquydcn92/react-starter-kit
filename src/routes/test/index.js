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
import fetch from '../../core/fetch';

export default {

  path: '/test',

  async action() {
    // Prop:content
    let content = { // eslint-disable-line prefer-const
      title: 'Test page | Admin Dev Kit',
      pageTitle: 'Test page',
      pageSubTitle: 'Just a test page',
    };

    // READ data from Graph API
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{posts{id,author,content}}',
      }),
      credentials: 'include',
    });

    const { data } = await resp.json();

    if (!data || !data.posts) {
      throw new Error('Failed to load the list of posts.');
    } else {
      content.data = data;
    }
    // End READ

    return {
      title: content.title,
      component: <Test content={content} />,
    };
  },

};
