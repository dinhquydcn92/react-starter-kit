/**
 * Created by Manhhailua on 10/5/16.
 */

import { GraphQLObjectType as ObjectType } from 'graphql';
import posts from './posts';

const mutation = new ObjectType({
  name: 'Mutation',
  fields: {
    ...posts,
  },
});

export default mutation;
