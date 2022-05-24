import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 4,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
    color:'#000000'
  },
});
