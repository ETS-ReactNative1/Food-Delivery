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
import {userRegister} from '../redux/actions/auth';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = data => dispatch(userRegister(data));

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <LabelAndInput
          label="Full Name"
          placeholder="Enter your full name"
          name="fullname"
          control={control}
          errors={errors}
          rules={{
            required: true,
          }}
        />
        <LabelAndInput
          label="Email address"
          placeholder="Enter your email address"
          control={control}
          errors={errors}
          name="email"
          rules={{
            required: true,
            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i},
          }}
        />
        <LabelAndInput
          label="Password"
          placeholder={'Enter your password'}
          password={true}
          control={control}
          errors={errors}
          name="password"
          rules={{
            required: true,
          }}
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Button title={'Sign Up'} />
        </TouchableOpacity>
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
