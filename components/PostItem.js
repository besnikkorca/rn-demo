import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import TitleText from './UI/TitleText';

const PostItem = props => {
  const TouchableComp = (Platform.OS === 'android' && Platform.Version >= 21) ? TouchableNativeFeedback : TouchableOpacity

  return (
    <View style={styles.screen}>
      <View style={styles.touchable} >
        <TouchableComp onPress={props.onSelect} useForeground>
          <View>
            <TitleText>{props.title}</TitleText>
            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableComp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  }
})

export default PostItem;
