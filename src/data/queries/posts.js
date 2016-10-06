/**
 * Created by Manhhailua on 10/5/16.
 */

import {
  GraphQLList as List,
  GraphQLString as StringType,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import PostType from '../types/PostType';
import { Post } from '../models';

const posts = {
  type: new List(PostType),
  args: {
    author: { type: StringType },
  },
  resolve: resolver(Post),
};

export default posts;
