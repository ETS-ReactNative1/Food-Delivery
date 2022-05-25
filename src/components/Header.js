import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import menu from '../assets/icons/menu.png';
import shoppingCart from '../assets/icons/shopping-cart.png';
import SearchInput from './SearchInput';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Image source={menu} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={shoppingCart} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.titleHeader}>Delicious</Text>
        <Text style={styles.titleHeader}>food for you</Text>
      </View>
      <View style={styles.search}>
        <SearchInput placeholder="Search"/>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  bottom: {
    marginVertical:32
  },
  icon: {
    width: 22,
    height: 22,
  },
  titleHeader: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 40,
  },
  search: {

  }
});
