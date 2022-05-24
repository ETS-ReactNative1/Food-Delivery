import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Label from './Label';
import Input from './Input';

const LabelAndInput = ({
  label,
  placeholder,
  password,
  control,
  name,
  rules,
  errors,
}) => {
  return (
    <View style={styles.container}>
      <Label name={label} />
      <Input
        placeholder={placeholder}
        secureTextEntry={password}
        control={control}
        name={name}
        rules={rules}
        errors={errors}
      />
    </View>
  );
};

export default LabelAndInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
});
