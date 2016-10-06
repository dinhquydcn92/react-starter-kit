/**
 * Created by Manhhailua on 10/5/16.
 */

import { GraphQLObjectType as ObjectType } from 'graphql';
import { attributeFields } from 'graphql-sequelize';
import { Reader } from '../models';

const ReaderType = new ObjectType({
  name: 'Reader',
  fields: attributeFields(Reader),
});

export default ReaderType;
