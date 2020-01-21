import { FETCH_POSTS, DELETE_POST, SHUFFLE_POSTS } from '../actions/posts';
import { shuffleArray } from '../../utilities';

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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }
    case SHUFFLE_POSTS:
      return {
        ...state,
        posts: shuffleArray(state.posts)
      }
    default:
      return state;
  }
};

export default postsReducer;
