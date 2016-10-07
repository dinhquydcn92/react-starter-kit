/**
 * Created by Manhhailua on 10/5/16.
 */

import {
  GraphQLList as List,
  GraphQLString as StringType,
} from 'graphql';
import { resolver, defaultListArgs } from 'graphql-sequelize';
import PostType from '../types/PostType';
import { Post } from '../models';

const posts = {
  type: new List(PostType),
  args: Object.assign(defaultListArgs(), {
    author: { type: StringType },
  }),
  resolve: resolver(Post, {
    before(options) {
      const opts = options;
      opts.order = options.order || [];
      opts.order.push(['createdAt', 'DESC']);
      return opts;
    },
  }),
};

export default posts;
