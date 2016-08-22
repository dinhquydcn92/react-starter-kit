import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.css';

class Content extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="content-wrapper" style={{minHeight: '1048px'}}>
        {/*<!-- Content Header (Page header) -->*/}
        <section className="content-header">

          <h1>
            {this.props.children.props.content.pageTitle}
            <small>{this.props.children.props.content.pageSubTitle}</small>
          </h1>

          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>

        </section>
        {/* End of .content-header */}

        {/*<!-- Main content -->*/}
        <section className="content">
          {this.props.children}
        </section>
        {/*<!-- /.content -->*/}
      </div>
    );
  }

}

export default withStyles(s)(Content);
