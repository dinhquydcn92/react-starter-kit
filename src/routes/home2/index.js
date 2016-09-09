/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home2 from './Home2';
import fetch from '../../core/fetch';

export default {

  path: '/index2',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: '{news{title,link,contentSnippet}}' }),
      credentials: 'include',
    });

    const { data } = await resp.json();

    if (!data || !data.news) {
      throw new Error('Failed to load the news feed.');
    }

    let content = { // eslint-disable-line prefer-const
      title: 'Home 2 - Admin Dev Kit',
      pageTitle: 'Home 2',
      pageSubTitle: '',
      news: data.news,
    };

    return <Home2 content={content} />;
  },
};
