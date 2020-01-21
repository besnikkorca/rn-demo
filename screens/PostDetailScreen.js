import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PostDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>POST DETAIL SCREEN!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default PostDetailScreen;
