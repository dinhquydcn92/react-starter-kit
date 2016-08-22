/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends Component {

  static propTypes = {
    content: PropTypes.shape({
      title: PropTypes.string.isRequired,
      pageTitle: PropTypes.string.isRequired,
      pageSubTitle: PropTypes.string,
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
      })).isRequired,
    }).isRequired,
  };

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    context.setTitle(this.props.content.title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <ul className={s.news}>
            {this.props.content.news.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{__html: item.contentSnippet}}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Home);
