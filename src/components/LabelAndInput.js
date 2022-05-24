import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Label from './Label';
import Input from './Input';

const LabelAndInput = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Label name={label} />
      <Input placeholder={placeholder} />
    </View>
  );
};

export default LabelAndInput;

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    }
});
