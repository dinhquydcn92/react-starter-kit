/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.css';
import Header from '../Header';
import AsideLeft from '../AsideLeft';
import Content from '../Content';
import AsideRight from '../AsideRight';
import Footer from '../Footer';

class App extends Component {

  static propTypes = {
    // Common context
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
      setBodyClasses: PropTypes.func,
    }),
    // Child component
    children: PropTypes.element.isRequired,
    // Define full width page
    isFullWidth: PropTypes.bool,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
    setBodyClasses: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;

    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
      setBodyClasses: context.setBodyClasses || emptyFunction
    };
  }

  componentWillMount() {
    const {insertCss} = this.props.context;
    this.removeCss    = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  renderFullWidthPage() {
    return (
      this.props.children
    );
  }

  render() {

    if (this.props.isFullWidth) {
      return this.renderFullWidthPage();
    }

    return (
      <div>
        <Header />
        <AsideLeft />
        <Content>{this.props.children}</Content>
        <AsideRight />
        <Footer />
      </div>
    );
  }

}

export default App;
