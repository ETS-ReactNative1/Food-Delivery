import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubHeader from '../components/SubHeader';
import Card from '../components/Card';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#F2F2F2'
      }}>
        <SubHeader/>
        <Slider/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
