import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundColor: '#F4F4F8',
    marginLeft: 50,
  },
});
