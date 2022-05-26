import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomDrawerItem = ({label, icon}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.item}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    marginVertical: 10,
    alignItems: 'center',
    paddingLeft: 12,
    borderRadius: 16,
  },
  item: {
    marginLeft: 15,
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  icon: {
    width: 22,
    height: 22,
  },
});
