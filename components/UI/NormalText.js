import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NormalText = props => {
  return (
    <View>
      <Text style={styles.normal}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  normal: {
    paddingHorizontal: 10,
    fontFamily: 'open-sans',
    fontSize: 14
  }
})

export default NormalText;
