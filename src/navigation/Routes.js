import {StyleSheet} from 'react-native';
import React from 'react';
import MainNavigation from './MainNavigation';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';

const Routes = () => {
  const store = useSelector(state => state.auths);

  return (
    <>
      {Object.keys(store.data).length !== 0 ? (
        <MainNavigation />
      ) : (
        <MainNavigation />
      )}
    </>
  );
};

export default Routes;

const styles = StyleSheet.create({});
