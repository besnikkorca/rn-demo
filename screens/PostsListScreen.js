import React, { useEffect } from 'react';
import { StyleSheet, Button, FlatList, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/posts';

import PostItem from '../components/PostItem';
import Colors from '../constants/Colors';

const PostsListScreen = props => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleSelectPost = (postId, postTitle) => {
    props.navigation.navigate('PostDetail', {
      postId,
      postTitle
    })
  }

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        keyExtractor={post => `${post.id}`}
        data={posts}
        renderItem={itemData => (
          <PostItem {...itemData.item} >
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={() => handleSelectPost(itemData.item.id, itemData.item.title)}
            />
          </PostItem>
        )}
      />
    </View>
  );
};

PostsListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All posts'
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
