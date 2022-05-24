import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Tab from '../components/Tab';
import LoginStack from '../navigation/LoginStack';

const AuthLayout = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require('../assets/images/login_logo.png')}
          />
          <Image
            style={styles.vector}
            source={require('../assets/images/login_vector1.png')}
          />
        </View>
        <View style={styles.tabView}>
          <Tab
            title="Login"
            active={true}
            navigation={navigation}
            routeName="Login"
          />
          <Tab
            title="Sign-up"
            active={false}
            navigation={navigation}
            routeName="SignUp"
          />
        </View>
        <View style={styles.activeBar} />
      </View>
      <View style={styles.footer}>
        <LoginStack />
      </View>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    justifyContent: 'center',
  },
  footer: {
    flex: 1.3,
  },
  tabView: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 16,
  },
  vector: {
    position: 'absolute',
    left: 220,
    top: 35,
  },
  logo: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
