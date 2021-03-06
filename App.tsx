import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#202024" />
      <Routes />
    </>
  );
}

