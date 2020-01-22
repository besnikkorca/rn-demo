import React from 'react';
import { FlatList } from 'react-native';
import renderer from 'react-test-renderer';

import PostsListScreen from '../../screens/PostsListScreen';
import PostItem from '../../components/PostItem';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn().mockImplementation(() => () => {}),
  useSelector: jest.fn()
}));

import { useSelector } from 'react-redux';

const mockedProps = {
  navigation: {
    setParams: () => {},
  }
}

describe('<PostsListScreen />', () => {
  let tree;
  beforeEach(() => {
    tree = renderer.create(<PostsListScreen {...mockedProps} />)
  });

  it('has 1 child', () => expect(tree.toJSON().children.length).toBe(1));
  it('renders correctly', () => expect(tree.toJSON()).toMatchSnapshot());
  it('renders the posts list', () => {
    useSelector.mockImplementation(() => [
      { id: 1, title: 'Post 1', body: 'test-body-1' },
      { id: 2, title: 'Post 2', body: 'test-body-2' }
    ]);
    // need to recreate the tree after mocking the implementation of use selector
    tree = renderer.create(<PostsListScreen {...mockedProps} />)
    expect(tree.root.findAllByType(FlatList).length).toBe(1);
    expect(tree.root.findByType(FlatList).findAllByType(PostItem).length).toBe(2)
  });
})
