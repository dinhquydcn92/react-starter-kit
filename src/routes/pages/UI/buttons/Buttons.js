import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../../../components/Layout';
import Link from '../../../../components/Link';
import s from './Buttons.css';

class Buttons extends Component {

  static propTypes = {
    // Wrap all props to one parent props
    content: PropTypes.shape({
      // Document title
      title: PropTypes.string.isRequired,
      // Page title
      pageTitle: PropTypes.string.isRequired,
      // Page subtitle
      pageSubTitle: PropTypes.string,
    }).isRequired,
  };

  render() {
    return (
      <Layout childrenProps={this.props}>
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="box box-primary">
                <div className="box-header">
                  <i className="fa fa-edit"/>
                  <h3 className="box-title">Buttons</h3>
                </div>
                <div className="box-body pad table-responsive">
                  <p>Various types of buttons. Using the base class <code>.btn</code></p>
                  <table className="table table-bordered text-center">
                    <tbody>
                    <tr>
                      <th>Normal</th>
                      <th>Large <code>.btn-lg</code></th>
                      <th>Small <code>.btn-sm</code></th>
                      <th>X-Small <code>.btn-xs</code></th>
                      <th>Flat <code>.btn-flat</code></th>
                      <th>Disabled <code>.disabled</code></th>
                    </tr>
                    <tr>
                      <td>
                        <button type="button" className="btn btn-block btn-default">Default</button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-default btn-lg">Default
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-default btn-sm">Default
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-default btn-xs">Default
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-default btn-flat">
                          Default
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-default disabled">
                          Default
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button" className="btn btn-block btn-primary">Primary</button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-primary btn-lg">Primary
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-primary btn-sm">Primary
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-primary btn-xs">Primary
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-primary btn-flat">
                          Primary
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-primary disabled">
                          Primary
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button" className="btn btn-block btn-success">Success</button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-success btn-lg">Success
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-success btn-sm">Success
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-success btn-xs">Success
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-success btn-flat">
                          Success
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-success disabled">
                          Success
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button" className="btn btn-block btn-info">Info</button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-info btn-lg">Info
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-info btn-sm">Info
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-info btn-xs">Info
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-info btn-flat">Info
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-info disabled">Info
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button" className="btn btn-block btn-danger">Danger</button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-danger btn-lg">Danger
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-danger btn-sm">Danger
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-danger btn-xs">Danger
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-danger btn-flat">Danger
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-danger disabled">Danger
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button" className="btn btn-block btn-warning">Warning</button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-warning btn-lg">Warning
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-warning btn-sm">Warning
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-warning btn-xs">Warning
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-warning btn-flat">
                          Warning
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-block btn-warning disabled">
                          Warning
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.box */}
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* ./row */}
          <div className="row">
            <div className="col-md-6">
              {/* Block buttons */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Block Buttons</h3>
                </div>
                <div className="box-body">
                  <button type="button" className="btn btn-default btn-block">.btn-block</button>
                  <button type="button" className="btn btn-default btn-block btn-flat">.btn-block
                    .btn-flat
                  </button>
                  <button type="button" className="btn btn-default btn-block btn-sm">.btn-block
                    .btn-sm
                  </button>
                </div>
              </div>
              {/* /.box */}
              {/* Horizontal grouping */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Horizontal Button Group</h3>
                </div>
                <div className="box-body table-responsive pad">
                  <p>
                    Horizontal button groups are easy to create with bootstrap. Just add your
                    buttons
                    inside <code>&lt;div class="btn-group"&gt;&lt;/div&gt;</code>
                  </p>
                  <table className="table table-bordered">
                    <tbody>
                    <tr>
                      <th>Button</th>
                      <th>Icons</th>
                      <th>Flat</th>
                      <th>Dropdown</th>
                    </tr>
                    {/* Default */}
                    <tr>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-default">Left</button>
                          <button type="button" className="btn btn-default">Middle</button>
                          <button type="button" className="btn btn-default">Right</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-default"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-default"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-default"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-default btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-default btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-default btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-default">1</button>
                          <button type="button" className="btn btn-default">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* ./default */}
                    {/* Info */}
                    <tr>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-info">Left</button>
                          <button type="button" className="btn btn-info">Middle</button>
                          <button type="button" className="btn btn-info">Right</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-info"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-info"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-info"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-info btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-info btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-info btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-info">1</button>
                          <button type="button" className="btn btn-info">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-info dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /. info */}
                    {/* /.danger */}
                    <tr>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-danger">Left</button>
                          <button type="button" className="btn btn-danger">Middle</button>
                          <button type="button" className="btn btn-danger">Right</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-danger"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-danger"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-danger"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-danger btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-danger btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-danger btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-danger">1</button>
                          <button type="button" className="btn btn-danger">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-danger dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /.danger */}
                    {/* warning */}
                    <tr>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-warning">Left</button>
                          <button type="button" className="btn btn-warning">Middle</button>
                          <button type="button" className="btn btn-warning">Right</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-warning"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-warning"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-warning"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-warning btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-warning btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-warning btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-warning">1</button>
                          <button type="button" className="btn btn-warning">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-warning dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /.warning */}
                    {/* success */}
                    <tr>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-success">Left</button>
                          <button type="button" className="btn btn-success">Middle</button>
                          <button type="button" className="btn btn-success">Right</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-success"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-success"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-success"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-success btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-success btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-success btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-success">1</button>
                          <button type="button" className="btn btn-success">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /.success */}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /.box */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Button Addon</h3>
                </div>
                <div className="box-body">
                  <p>With dropdown</p>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default dropdown-toggle"
                              data-toggle="dropdown">Action
                        <span className="fa fa-caret-down"/></button>
                      <ul className="dropdown-menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    {/* /btn-group */}
                    <input type="text" className="form-control"/>
                  </div>
                  {/* /input-group */}
                  <p>Normal</p>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-danger">Action</button>
                    </div>
                    {/* /btn-group */}
                    <input type="text" className="form-control"/>
                  </div>
                  {/* /input-group */}
                  <p>Flat</p>
                  <div className="input-group margin">
                    <input type="text" className="form-control"/>
                    <span className="input-group-btn">
                    <button type="button" className="btn btn-info btn-flat">Go!</button>
                  </span>
                  </div>
                  {/* /input-group */}
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              {/* split buttons box */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Split buttons</h3>
                </div>
                <div className="box-body">
                  {/* Split button */}
                  <p>Normal split buttons:</p>
                  <div className="margin">
                    <div className="btn-group">
                      <button type="button" className="btn btn-default">Action</button>
                      <button type="button" className="btn btn-default dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-info">Action</button>
                      <button type="button" className="btn btn-info dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger">Action</button>
                      <button type="button" className="btn btn-danger dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-success">Action</button>
                      <button type="button" className="btn btn-success dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-warning">Action</button>
                      <button type="button" className="btn btn-warning dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* flat split buttons */}
                  <p>Flat split buttons:</p>
                  <div className="margin">
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-flat">Action</button>
                      <button type="button" className="btn btn-default btn-flat dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-info btn-flat">Action</button>
                      <button type="button" className="btn btn-info btn-flat dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger btn-flat">Action</button>
                      <button type="button" className="btn btn-danger btn-flat dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-success btn-flat">Action</button>
                      <button type="button" className="btn btn-success btn-flat dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-warning btn-flat">Action</button>
                      <button type="button" className="btn btn-warning btn-flat dropdown-toggle"
                              data-toggle="dropdown">
                        <span className="caret"/>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="#">Action</Link></li>
                        <li><Link to="#">Another action</Link></li>
                        <li><Link to="#">Something else here</Link></li>
                        <li className="divider"/>
                        <li><Link to="#">Separated link</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* end split buttons box */}
              {/* social buttons */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Social Buttons (By <Link
                    to="https://github.com/lipis/bootstrap-social">Lipis</Link>)
                  </h3>
                </div>
                <div className="box-body">
                  <Link to="#" className="btn btn-block btn-social btn-bitbucket">
                    <i className="fa fa-bitbucket"/> Sign in with Bitbucket
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-dropbox">
                    <i className="fa fa-dropbox"/> Sign in with Dropbox
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-facebook">
                    <i className="fa fa-facebook"/> Sign in with Facebook
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-flickr">
                    <i className="fa fa-flickr"/> Sign in with Flickr
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-foursquare">
                    <i className="fa fa-foursquare"/> Sign in with Foursquare
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-github">
                    <i className="fa fa-github"/> Sign in with GitHub
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-google">
                    <i className="fa fa-google-plus"/> Sign in with Google
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-instagram">
                    <i className="fa fa-instagram"/> Sign in with Instagram
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-linkedin">
                    <i className="fa fa-linkedin"/> Sign in with LinkedIn
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-tumblr">
                    <i className="fa fa-tumblr"/> Sign in with Tumblr
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-twitter">
                    <i className="fa fa-twitter"/> Sign in with Twitter
                  </Link>
                  <Link to="#" className="btn btn-block btn-social btn-vk">
                    <i className="fa fa-vk"/> Sign in with VK
                  </Link>
                  <br />
                  <div className="text-center">
                    <Link to="#" className="btn btn-social-icon btn-bitbucket"><i
                      className="fa fa-bitbucket"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-dropbox"><i
                      className="fa fa-dropbox"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-facebook"><i
                      className="fa fa-facebook"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-flickr"><i
                      className="fa fa-flickr"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-foursquare"><i
                      className="fa fa-foursquare"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-github"><i
                      className="fa fa-github"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-google"><i
                      className="fa fa-google-plus"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-instagram"><i
                      className="fa fa-instagram"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-linkedin"><i
                      className="fa fa-linkedin"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-tumblr"><i
                      className="fa fa-tumblr"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-twitter"><i
                      className="fa fa-twitter"/></Link>
                    <Link to="#" className="btn btn-social-icon btn-vk"><i
                      className="fa fa-vk"/></Link>
                  </div>
                </div>
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-6">
              {/* Application buttons */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Application Buttons</h3>
                </div>
                <div className="box-body">
                  <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a&gt;</code> tag to
                    achieve the following:</p>
                  <Link to="#" className="btn btn-app">
                    <i className="fa fa-edit"/> Edit
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <i className="fa fa-play"/> Play
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <i className="fa fa-repeat"/> Repeat
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <i className="fa fa-pause"/> Pause
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <i className="fa fa-save"/> Save
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <span className="badge bg-yellow">3</span>
                    <i className="fa fa-bullhorn"/> Notifications
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <span className="badge bg-green">300</span>
                    <i className="fa fa-barcode"/> Products
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <span className="badge bg-purple">891</span>
                    <i className="fa fa-users"/> Users
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <span className="badge bg-teal">67</span>
                    <i className="fa fa-inbox"/> Orders
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <span className="badge bg-aqua">12</span>
                    <i className="fa fa-envelope"/> Inbox
                  </Link>
                  <Link to="#" className="btn btn-app">
                    <span className="badge bg-red">531</span>
                    <i className="fa fa-heart-o"/> Likes
                  </Link>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              {/* Various colors */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Different colors</h3>
                </div>
                <div className="box-body">
                  <p>Mix and match with various background colors. Use base class <code>.btn</code>
                    and add any available
                    <code>.bg-*</code> class</p>
                  {/* You may notice a .margin class added
                   here but that's only to make the content
                   display correctly without having to use a table*/}
                  <p>
                    <button type="button" className="btn bg-maroon btn-flat margin">
                      .btn.bg-maroon.btn-flat
                    </button>
                    <button type="button" className="btn bg-purple btn-flat margin">
                      .btn.bg-purple.btn-flat
                    </button>
                    <button type="button" className="btn bg-navy btn-flat margin">
                      .btn.bg-navy.btn-flat
                    </button>
                    <button type="button" className="btn bg-orange btn-flat margin">
                      .btn.bg-orange.btn-flat
                    </button>
                    <button type="button" className="btn bg-olive btn-flat margin">
                      .btn.bg-olive.btn-flat
                    </button>
                  </p>
                  <p>
                    <button type="button" className="btn bg-maroon margin">.btn.bg-maroon</button>
                    <button type="button" className="btn bg-purple margin">.btn.bg-purple</button>
                    <button type="button" className="btn bg-navy margin">.btn.bg-navy</button>
                    <button type="button" className="btn bg-orange margin">.btn.bg-orange</button>
                    <button type="button" className="btn bg-olive margin">.btn.bg-olive</button>
                  </p>
                </div>
              </div>
              {/* /.box */}
              {/* Vertical grouping */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Vertical Button Group</h3>
                </div>
                <div className="box-body table-responsive pad">
                  <p>
                    Vertical button groups are easy to create with bootstrap. Just add your buttons
                    inside <code>&lt;div class="btn-group-vertical"&gt;&lt;/div&gt;</code>
                  </p>
                  <table className="table table-bordered">
                    <tbody>
                    <tr>
                      <th>Button</th>
                      <th>Icons</th>
                      <th>Flat</th>
                      <th>Dropdown</th>
                    </tr>
                    {/* Default */}
                    <tr>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-default">Top</button>
                          <button type="button" className="btn btn-default">Middle</button>
                          <button type="button" className="btn btn-default">Bottom</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-default"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-default"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-default"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-default btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-default btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-default btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-default">1</button>
                          <button type="button" className="btn btn-default">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* ./default */}
                    {/* Info */}
                    <tr>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-info">Top</button>
                          <button type="button" className="btn btn-info">Middle</button>
                          <button type="button" className="btn btn-info">Bottom</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-info"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-info"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-info"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-info btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-info btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-info btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-info">1</button>
                          <button type="button" className="btn btn-info">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-info dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /. info */}
                    {/* /.danger */}
                    <tr>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-danger">Top</button>
                          <button type="button" className="btn btn-danger">Middle</button>
                          <button type="button" className="btn btn-danger">Bottom</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-danger"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-danger"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-danger"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-danger btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-danger btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-danger btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-danger">1</button>
                          <button type="button" className="btn btn-danger">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-danger dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /.danger */}
                    {/* warning */}
                    <tr>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-warning">Top</button>
                          <button type="button" className="btn btn-warning">Middle</button>
                          <button type="button" className="btn btn-warning">Bottom</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-warning"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-warning"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-warning"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-warning btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-warning btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-warning btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-warning">1</button>
                          <button type="button" className="btn btn-warning">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-warning dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /.warning */}
                    {/* success */}
                    <tr>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-success">Top</button>
                          <button type="button" className="btn btn-success">Middle</button>
                          <button type="button" className="btn btn-success">Bottom</button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-success"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-success"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-success"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-success btn-flat"><i
                            className="fa fa-align-left"/></button>
                          <button type="button" className="btn btn-success btn-flat"><i
                            className="fa fa-align-center"/></button>
                          <button type="button" className="btn btn-success btn-flat"><i
                            className="fa fa-align-right"/></button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group-vertical">
                          <button type="button" className="btn btn-success">1</button>
                          <button type="button" className="btn btn-success">2</button>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle"
                                    data-toggle="dropdown">
                              <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="#">Dropdown link</Link></li>
                              <li><Link to="#">Dropdown link</Link></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* /.success */}
                    </tbody>
                  </table>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /. row */}
        </div>
      </Layout>
    );
  }

}

export default withStyles(s)(Buttons);
