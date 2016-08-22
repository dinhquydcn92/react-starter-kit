import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Starter.css';

const title = 'AdminLTE Starter Page';

function Starter(props, context) {
  context.setTitle(title);
  return (
    <p>Starter Page</p>
  );
}

Starter.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(Starter);
