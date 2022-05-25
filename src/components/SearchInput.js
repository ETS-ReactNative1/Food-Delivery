import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import search from '../assets/icons/search-icon.png';

const SearchInput = props => {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={styles.input} />
      <View style={styles.icon}>
        <Image source={search} style={styles.image} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#EFEEEE',
    paddingLeft: 60,
    paddingVertical: 20,
    borderRadius: 32,
    fontSize: 17,
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 25,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 18,
    height: 18,
  },
});
