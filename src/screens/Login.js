import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LabelAndInput from '../components/LabelAndInput';
import Button from '../components/Button';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {userLogin} from '../redux/actions/auth';

const Login = () => {
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(userLogin(data));
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <LabelAndInput
          label="Email address"
          placeholder="Enter your email address"
          control={control}
          name="email"
        />
        <LabelAndInput
          label="Password"
          placeholder={'Enter your password'}
          password={true}
          control={control}
          name="password"
        />
        <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Button title={'Login'} />
        </TouchableOpacity>
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
