/**
 * Created by Manhhailua on 10/6/16.
 */

import {
  GET_ALL_POSTS,
  SUBMIT_POST,
} from '../constants';

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_ALL_POSTS: {
      return {
        ...state,
        latest: action.payload.posts,
      };
    }

    case SUBMIT_POST: {
      state.latest.unshift(action.payload.post);
      return { ...state };
    }

    default: {
      return state;
    }
  }
}
