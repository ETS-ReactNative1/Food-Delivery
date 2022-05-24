import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Label = ({name}) => {
  return (
    <View>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default Label

const styles = StyleSheet.create({
    text: {
        fontSize:15,
        fontWeight:'600',
        lineHeight:18,
        color:'#000000',
        opacity:0.4
    }
})