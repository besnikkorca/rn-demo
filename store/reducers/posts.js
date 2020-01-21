import { FETCH_POSTS } from '../actions/posts';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default postsReducer;
