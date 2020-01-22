import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Button, FlatList, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, shufflePosts } from '../store/actions/posts';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import PostItem from '../components/PostItem';
import Colors from '../constants/Colors';
import HeaderButton from '../components/UI/HeaderButton';

const PostsListScreen = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  const onShufflePosts = useCallback(() => dispatch(shufflePosts()), [dispatch]);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  useEffect(() => {
    props.navigation.setParams({ onShuffle: onShufflePosts });
  }, [onShufflePosts]);

  const selectPost = (postId, postTitle) => {
    props.navigation.navigate('PostDetail', {
      postId,
      postTitle
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        keyExtractor={post => `${post.id}`}
        data={posts}
        renderItem={itemData => {
          const { id, title, body } = itemData.item
          const handleSelectPost = () => selectPost(id, title);
          return (
            <PostItem
              title={title}
              body={body}
              onSelect={handleSelectPost}
            >
              {/* this would make more sense if we had other options besides view detail */}
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={handleSelectPost}
              />
            </PostItem>
          )
        }}
      />
    </View>
  );
};

PostsListScreen.navigationOptions = navData => {
  const handleShufflePosts = navData.navigation.getParam('onShuffle');
  return {
    headerTitle: 'All posts',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Shuffle" iconName={Platform.OS === 'android' ? 'md-shuffle' : 'ios-shuffle'} onPress={handleShufflePosts} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%'
  },
});

export default PostsListScreen;
