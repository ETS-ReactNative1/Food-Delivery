import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tab = ({title, active}) => {
  return (
    <View style={styles.tab}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.active(active)} />
    </View>
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
    marginHorizontal:32
  },
  active:(active) => ({
    width: '100%',
    height: 3,
    backgroundColor: active ? '#FA4A0C' : '#FFFFFF',
  }),
});
