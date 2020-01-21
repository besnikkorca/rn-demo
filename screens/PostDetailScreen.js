import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NormalText from '../components/UI/NormalText';
import Colors from '../constants/Colors';
import { deletePost } from '../store/actions/posts';

const PostDetailScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch()
  const postId = props.navigation.getParam('postId');
  const handleDeletePost =  async () => {
    setIsLoading(true);
    setError(null);
    setDeleted(false);
    try {
      await dispatch(deletePost(postId))
    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false);
    setDeleted(true)
    // we don't need the timeout and could navigate to posts immediately
    // which is probably better from a UI perspective just wanted to do a different take on this
    setTimeout(() => props.navigation.navigate('Posts'), 500)
  }
  // since we got all posts loaded we can use them from the client side
  // otherwsie we'd have to dispatch a fetch action for the post
  const post = useSelector(state => state.posts.posts.find(({ id }) => id === postId))

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error occurred!</Text>
      </View>
    )
  }

  if (deleted) {
    return (
      <View style={styles.centered}>
        <Text>Post has been deleted! Returning to posts list</Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View style={styles.centered}>
        <Text>Post not found!</Text>
      </View>
    )
  }

  // using scroll view just in case the body is to long
  return (
    <ScrollView>
      <View style={styles.screen}>
        <NormalText>{post.body}</NormalText>
        <View style={styles.actions}>
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color={Colors.primary}
            />
          ) : (
            <Button
              color={Colors.primary}
              title="Delete Post"
              onPress={handleDeletePost}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

PostDetailScreen.navigationOptions = navData => {
  const postTitle = navData.navigation.getParam('postTitle')
  return {
    headerTitle: postTitle.length < 25 ? postTitle : `${postTitle.substr(0, 25)}...`
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
})

export default PostDetailScreen;
