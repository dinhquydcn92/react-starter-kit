/**
 * Created by Manhhailua on 10/6/16.
 */

/* eslint-disable import/prefer-default-export */

import {
  GET_ALL_POSTS,
  SUBMIT_POST,
} from '../constants';

const queryGetAllPosts = `
query {
  posts {
    id
    author
    content
  }
}`;

export function getAllPosts() {
  return async(dispatch, getState, { graphqlRequest }) => {
    const { data } = await graphqlRequest(queryGetAllPosts);
    dispatch({
      type: GET_ALL_POSTS,
      payload: {
        posts: data.posts,
      },
    });
  };
}

const querySubmitPost = `
mutation ($post: PostInputWithoutId!) {
  createPost(post: $post) {
    id
    author
    content
  }
}`;

export function submitPost({ author, content }) {
  return async(dispatch, getState, { graphqlRequest }) => {
    const { data } = await graphqlRequest(querySubmitPost, { post: { author, content } });

    dispatch({
      type: SUBMIT_POST,
      payload: {
        post: data.createPost,
      },
    });
  };
}
