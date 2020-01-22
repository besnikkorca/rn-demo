import React from 'react';
import { Text, Button } from 'react-native';
import renderer from 'react-test-renderer';

import PostDetailScreen from '../../screens/PostDetailScreen';
import NormalText from '../../components/UI/NormalText';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn().mockImplementation(() => () => {}),
  useSelector: jest.fn(),
}));

import { useSelector } from 'react-redux';

const mockedProps = {
  navigation: {
    getParam: () => {},
    navigate: () => {},
  }
};

describe('<PostDetailScreen />', () => {
  let tree;
  beforeEach(() => {
    tree = renderer.create(<PostDetailScreen {...mockedProps} />);
  });

  it('has 1 child', () => expect(tree.toJSON().children.length).toBe(1));
  it('renders correctly', () => expect(tree.toJSON()).toMatchSnapshot());
  it('renders body of post', () => {
    useSelector.mockImplementation(() => ({ id: 1, title: 'Post 1', body: 'test-body-1' }));
    tree = renderer.create(<PostDetailScreen {...mockedProps} />);
    expect(tree.root.findAllByType(NormalText).length).toBe(1);
    expect(tree.root.findByType(NormalText).props.children).toBe('test-body-1')
  });
  it('has a delete button', () => {
    useSelector.mockImplementation(() => ({ id: 1, title: 'Post 1', body: 'test-body-1' }));
    tree = renderer.create(<PostDetailScreen {...mockedProps} />);
    expect(tree.root.findAllByType(Button).length).toBe(1);
    expect(tree.root.findByType(Button).props.title).toBe("Delete Post");
  });
  it('renders post not found text', () => {
    useSelector.mockImplementation(() => (null));
    tree = renderer.create(<PostDetailScreen {...mockedProps} />);
    expect(tree.root.findByType(Text).props.children).toBe("Post not found!");
  });
})
