import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import LabelAndInput from '../components/LabelAndInput';
import Button from '../components/Button';

const Login = () => {
  return (
    <ScrollView style={{flex:1}}>
      <View style={styles.container}>
        <LabelAndInput
          label="Email address"
          placeholder="Enter your email address"
        />
        <LabelAndInput label="Password" placeholder={'Enter your password'} />
        <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
        <Button title={'Login'} />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 32,
  },
  forgotPasscode: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FA4A0C',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
