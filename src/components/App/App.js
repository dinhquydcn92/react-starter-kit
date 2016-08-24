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
      enqueueStyles: PropTypes.func,
      enqueueScripts: PropTypes.func,
    }),
    // Child component
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func,
    setBodyClasses: PropTypes.func.isRequired,
    enqueueStyles: PropTypes.func,
    enqueueScripts: PropTypes.func,
  };

  getChildContext() {
    const context = this.props.context;

    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
      setBodyClasses: context.setBodyClasses || emptyFunction,
      enqueueStyles: context.enqueueStyles || emptyFunction,
      enqueueScripts: context.enqueueScripts || emptyFunction,
    };
  }

  componentWillMount() {
    const {insertCss, enqueueStyles, enqueueScripts} = this.props.context;

    this.removeCss = insertCss(s);

    if (enqueueStyles) {
      enqueueStyles([
        '/AdminLTE/bootstrap/css/bootstrap.min.css',
        '/assets/plugins/font-awesome/css/font-awesome.min.css',
        '/assets/plugins/ionicons/dist/css/ionicons.min.css',
        '/AdminLTE/dist/css/AdminLTE.min.css',
        '/AdminLTE/dist/css/skins/skin-blue.min.css',
      ]);
    }

    if (enqueueScripts) {
      enqueueScripts([
        '/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js',
        '/AdminLTE/bootstrap/js/bootstrap.min.js',
        '/AdminLTE/dist/js/app.min.js',
      ]);
    }
  }

  componentWillUnmount() {
    // Dequeue styles/scripts here
    this.removeCss();
  }

  // Render without components
  renderFullWidthPage() {
    return (
      this.props.children
    );
  }

  // Render main components with inner content
  renderInnerPage() {
    return (
      <div className="wrapper">
        <Header />
        <AsideLeft />
        <Content>{this.props.children}</Content>
        <AsideRight />
        <Footer />
      </div>
    );
  }

  render() {
    if (this.props.children.props && this.props.children.props.isFullWidth !== true) {
      return this.renderInnerPage();
    }

    return this.renderFullWidthPage();
  }

}

export default App;
