import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchInput from './SearchInput';

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.titleHeader}>Delicious</Text>
        <Text style={styles.titleHeader}>food for you</Text>
      </View>
      <View>
        <SearchInput placeholder="Search" />
      </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    marginBottom:32
  },
  bottom: {
    marginVertical: 32,
  },
  titleHeader: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 40,
  },
});
