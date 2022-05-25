import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';
import Category from './Category';
import {Foods, Drinks, Snacks} from '../fakedb/Database';
import {useSelector} from 'react-redux';

const Slider = () => {
  const store = useSelector(state => state.navigations);

  const getData = data => {
    console.log(data);
    switch (data) {
      case 'Foods':
        return Foods;
      case 'Drinks':
        return Drinks;
      case 'Snacks':
        return Snacks;
      default:
        return Foods;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.category}>
        <Category title="Foods" categoryName="Foods" />
        <Category title="Drinks" categoryName="Drinks" />
        <Category title="Snacks" categoryName="Snacks" />
      </View>
      <FlatList
        data={getData(store.sliderData)}
        horizontal={true}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});
