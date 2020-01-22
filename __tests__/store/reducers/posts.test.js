import postsReducer from '../../../store/reducers/posts';
import { FETCH_POSTS, DELETE_POST, SHUFFLE_POSTS } from '../../../store/actions/posts';

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(postsReducer(undefined, {})).toEqual({ posts: [] });
  });
  it('should store the fetched posts', () => {
    const fetchedPosts = [
      { id: 1, title: 'Post 1', body: 'test-body-1' },
      { id: 2, title: 'Post 2', body: 'test-body-2' }
    ]
    expect(postsReducer(undefined, { type: FETCH_POSTS, posts: fetchedPosts })).toEqual({ posts: fetchedPosts });
  });
  it('should delete a post', () => {
    const postToDeleteId = 1
    const posts = [
      { id: 1, title: 'Post 1', body: 'test-body-1' },
      { id: 2, title: 'Post 2', body: 'test-body-2' }
    ]
    expect(postsReducer({ posts }, { type: DELETE_POST, postId: postToDeleteId }))
      .toEqual({ posts: [{ id: 2, title: 'Post 2', body: 'test-body-2' }] })
  })
});
