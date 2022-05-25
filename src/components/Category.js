import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSliderTab, setTab} from '../redux/actions/navigation';

const Category = ({title}) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.navigations);
  const categoryFunc = () => {
    dispatch(setSliderTab(title));
  };
  return (
    <TouchableOpacity style={styles.tab} onPress={() => categoryFunc()}>
      <Text style={styles.title(store.sliderData === title ? true : false)}>
        {title}
      </Text>
      <View style={styles.active(store.sliderData === title ? true : false)} />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  title: active => ({
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 12,
    color: active ? '#FA4A0C' : undefined,
  }),
  tab: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 32,
  },
  active: active => ({
    width: '100%',
    height: 3,
    backgroundColor: active ? '#FA4A0C' : undefined,
  }),
});
