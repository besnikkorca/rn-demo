import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TitleText = props => {
  return (
    <View>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 14
  }
})

export default TitleText;
