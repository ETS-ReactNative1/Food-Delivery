import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import LabelAndInput from '../components/LabelAndInput';
import Button from '../components/Button';

const SignUp = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <LabelAndInput label="Full Name" placeholder="Enter your full name" />
        <LabelAndInput
          label="Email address"
          placeholder="Enter your email address"
        />
        <LabelAndInput
          label="Password"
          placeholder={'Enter your password'}
          password={true}
        />
        <Button title={'Sign Up'} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 8,
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
