import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({title}) => {
  return (
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFFFFF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA4A0C',
    borderRadius: 30,
    marginTop: 50,
    height: 70,
  },
});
