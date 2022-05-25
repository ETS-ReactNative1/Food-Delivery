import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import CustomDrawer from './CustomDrawer';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default LoginStack;

const styles = StyleSheet.create({});
