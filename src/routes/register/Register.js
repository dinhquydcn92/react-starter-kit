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
import s from './Register.css';

const title = 'New User Registration';

class Register extends Component {

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
      context.setBodyClasses('hold-transition register-page');
    }
  }

  render() {
    return (
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>
          <form action="../../index.html" method="post">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" placeholder="Full name"/>
              <span className="glyphicon glyphicon-user form-control-feedback"/>
            </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email"/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"/>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password"/>
              <span className="glyphicon glyphicon-lock form-control-feedback"/>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Retype password"/>
              <span className="glyphicon glyphicon-log-in form-control-feedback"/>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <div className="icheckbox_square-blue" aria-checked="false" aria-disabled="false"
                         style={{position: 'relative'}}><input type="checkbox" style={{
                      position: 'absolute',
                      top: '-20%',
                      left: '-20%',
                      display: 'block',
                      width: '140%',
                      height: '140%',
                      margin: 0,
                      padding: 0,
                      border: 0,
                      opacity: 0,
                      background: 'rgb(255, 255, 255)'
                    }}/>
                      <ins className="iCheck-helper" style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-20%',
                        display: 'block',
                        width: '140%',
                        height: '140%',
                        margin: 0,
                        padding: 0,
                        border: 0,
                        opacity: 0,
                        background: 'rgb(255, 255, 255)'
                      }}/>
                    </div>
                    I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"/> Sign
              up using
              Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"/> Sign
              up using
              Google+</a>
          </div>
          <a href="login.html" className="text-center">I already have a membership</a>
        </div>
        {/* /.form-box */}
      </div>
    );
  }
}

export default withStyles(s)(Register);
