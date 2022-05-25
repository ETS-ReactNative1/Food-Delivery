import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent';
import MainLayout from '../layouts/MainLayout';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {
          return <CustomDrawerContent />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA4A0C',
  },
});
