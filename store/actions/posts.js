export const FETCH_POSTS = 'FETCH_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const SHUFFLE_POSTS = 'SHUFFLE_POSTS';

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const loadedPosts = await response.json();
      dispatch({ type: FETCH_POSTS, posts: loadedPosts })
    } catch (err) {
      throw err;
    }
  };
};

export const shufflePosts = () => ({ type: SHUFFLE_POSTS })

export const deletePost = postId => {
  return async dispatch => {
    try {
      // in the task description there was no requirement to implement the delete request
      // but did it anyway since it's just a couple of lines
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        { method: 'DELETE' }
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      dispatch({ type: DELETE_POST, postId });
    } catch (err) {
      // write logs to logging service before rethrowing...
      throw err;
    };
  };
};
