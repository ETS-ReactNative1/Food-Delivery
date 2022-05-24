import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './MainNavigation';
import LoginStack from './LoginStack';
import AuthStack from './AuthStack';

const Routes = () => {
  return <>{false ? <MainNavigation /> : <AuthStack />}</>;
};

export default Routes;

const styles = StyleSheet.create({});
