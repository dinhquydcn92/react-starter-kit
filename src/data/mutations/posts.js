/**
 * Created by Manhhailua on 10/5/16.
 */

import {
  GraphQLID as IDType,
} from 'graphql';
import {
  resolver,
} from 'graphql-sequelize';
import PostType from '../types/PostType';
import PostInputType from '../types/PostInputType';
import PostInputTypeWithoutId from '../types/PostInputTypeWithoutId';
import { Post } from '../models';

const posts = {
  createPost: {
    type: PostType,
    args: {
      post: { type: PostInputTypeWithoutId },
    },
    resolve: resolver(Post, {
      async before(options, args) {
        const opts = options;
        opts.where = options.where || {};
        await Post.create(args.post).then(post => {
          opts.where.id = { $eq: post.id };
        });
        return opts;
      },
    }),
  },
  updatePost: {
    type: PostType,
    args: {
      post: { type: PostInputType },
    },
    resolve: resolver(Post, {
      before(options, args) {
        const opts = options;
        opts.where = options.where || {};
        opts.where.id = { $eq: args.post.id };

        Post.upsert(args.post);

        return opts;
      },
    }),
  },
  deletePost: {
    type: PostType,
    args: {
      id: { type: IDType },
    },
    resolve: resolver(Post, {
      before(options, args) {
        const opts = options;
        opts.where = options.where || {};
        opts.where.id = { $eq: args.id };

        return opts;
      },
      after(result, args) {
        Post.destroy({ where: { id: args.id } });

        return result;
      },
    }),
  },
};

export default posts;
