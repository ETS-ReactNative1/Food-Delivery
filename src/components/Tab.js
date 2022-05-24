import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTab} from '../redux/actions/navigation';

const Tab = ({title, active, navigation, routeName}) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.navigations);


  const tabFunc = () => {
    dispatch(setTab(routeName));
    navigation.navigate(routeName);
  };

  return (
    <TouchableOpacity style={styles.tab} onPress={() => tabFunc()}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.active(store.data === routeName ? true : false)} />
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 32,
  },
  active: active => ({
    width: '100%',
    height: 3,
    backgroundColor: active ? '#FA4A0C' : '#FFFFFF',
  }),
});
