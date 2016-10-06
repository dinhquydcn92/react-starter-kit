/**
 * Created by Manhhailua on 10/5/16.
 */

import { GraphQLObjectType as ObjectType } from 'graphql';
import me from './me';
import content from './content';
import news from './news';
import intl from './intl';
import posts from './posts';

const queries = new ObjectType({
  name: 'Query',
  fields: {
    me,
    content,
    news,
    intl,
    posts,
  },
});

export default queries;
