import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#F2F2F2'
      }}>
        <SubHeader/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
