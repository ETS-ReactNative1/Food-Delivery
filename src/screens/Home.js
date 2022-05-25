import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#F2F2F2'
      }}>
        <Header/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
