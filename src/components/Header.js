import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import menu from '../assets/icons/menu.png';
import shoppingCart from '../assets/icons/shopping-cart.png';
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { openDrawer } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={openDrawer}>
          <Image source={menu} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={shoppingCart} style={styles.icon} />
        </TouchableOpacity>
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
    marginVertical: 32,
  },
  icon: {
    width: 22,
    height: 22,
  },
});
