/**
 * Created by Manhhailua on 10/5/16.
 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Reader = Model.define('Reader', {

  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  age: {
    type: DataTypes.INTEGER,
  },

});

export default Reader;
