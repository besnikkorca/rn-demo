export const FETCH_POSTS = 'FETCH_POSTS';

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
