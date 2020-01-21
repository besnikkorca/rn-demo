import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PostsListScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>LIST SCREEN!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PostsListScreen;
