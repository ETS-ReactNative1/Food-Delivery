import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Favorite from '../screens/Favorite';
import History from '../screens/History';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#F2F2F2',
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={30}
              color={focused && '#FA4A0C'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              size={30}
              color={focused && '#FA4A0C'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={30}
              color={focused && '#FA4A0C'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name={'history'}
              size={30}
              color={focused && '#FA4A0C'}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
