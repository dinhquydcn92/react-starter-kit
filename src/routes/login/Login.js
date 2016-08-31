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
import Link from '../../components/Link';
import s from './Login.css';

class Login extends Component {

  static propTypes = {
    // Wrap all content props to one parent props
    content: PropTypes.shape({
      // Document title
      title: PropTypes.string.isRequired
    }).isRequired,
    // Define page layout
    isFullWidth: PropTypes.bool,
  };

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
    setBodyClasses: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    if (context.setTitle) {
      context.setTitle(this.props.content.title);
    }

    if (context.setBodyClasses) {
      context.setBodyClasses('hold-transition login-page');
    }
  }

  componentDidMount() {
    require('admin-lte/plugins/iCheck/icheck.min.js');

    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
      });
    });
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <Link to="/index2"><b>Admin</b>LTE</Link>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="/index2" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email"/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"/>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password"/>
              <span className="glyphicon glyphicon-lock form-control-feedback"/>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox"/>&nbsp;&nbsp;Remember Me
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <Link to="#" className="btn btn-block btn-social btn-facebook btn-flat"><i
              className="fa fa-facebook"/> Sign in using Facebook</Link>
            <Link to="#" className="btn btn-block btn-social btn-google btn-flat"><i
              className="fa fa-google-plus"/> Sign in using Google+</Link>
          </div>
          {/* /.social-auth-links */}
          <Link to="#">I forgot my password</Link><br />
          <Link to="/register">Register a new membership</Link>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

export default withStyles(s)(Login);
