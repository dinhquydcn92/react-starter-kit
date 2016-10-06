/**
 * Created by Manhhailua on 10/5/16.
 */

import {
  GraphQLList as List,
  GraphQLString as StringType,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import ReaderType from '../types/ReaderType';
import { Post } from '../models';

const readers = {
  type: new List(ReaderType),
  args: {
    author: { type: StringType },
  },
  resolve: resolver(Post.Readers),
};

export default readers;
