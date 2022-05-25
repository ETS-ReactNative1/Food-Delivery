import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Routes from './src/navigation/Routes';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Routes />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
