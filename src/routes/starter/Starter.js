import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Starter.css';

class Starter extends Component {

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

  static contextTypes = {
    setTitle: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    if (context.setTitle) {
      context.setTitle(this.props.content.title);
    }
  }

  render() {
    return (
      <p>Here is a starter page for building anything you want.</p>
    );
  }

}

export default withStyles(s)(Starter);
