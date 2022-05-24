import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {useController} from 'react-hook-form';

const Input = props => {
  const {name, control, rules, errors} = props;
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules,
  });
  return (
    <View>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={styles.input(errors[name])}
        {...props}
        placeholderTextColor={errors[name] && 'red'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: error => ({
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 4,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
    color: '#000000',
    borderColor: error ? 'red' : 'black',
  }),
});
