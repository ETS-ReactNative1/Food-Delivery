import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import TabNavigation from '../navigation/TabNavigation';
import Animated from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import Header from '../components/Header';
const MainLayout = ({navigation}) => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{scale}],
    overflow: 'hidden',
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        ...animatedStyle,
      }}>
      <Header navigation={navigation} />
      <TabNavigation />
    </Animated.View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
