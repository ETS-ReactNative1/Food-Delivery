import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: item.imageUri,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.codeTitle}>{item.code}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200,
    height: 200,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 40,
    borderRadius: 24,
  },
  imageBox: {
    position: 'absolute',
    top: -30,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 8,
  },
  codeTitle: {
    color: '#FA4A0C',
    fontSize: 16,
    fontWeight: '700',
  },
});
