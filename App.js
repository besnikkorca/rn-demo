import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import StoreWrapper from './components/hoc/StoreWrapper';
import ForumNavigator from './navigation/ForumNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const handleSetFontLoaded = () => setFontsLoaded(true);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={handleSetFontLoaded}
      />
    );
  }

  return (
    <StoreWrapper>
      <ForumNavigator />
    </StoreWrapper>
  );
}
