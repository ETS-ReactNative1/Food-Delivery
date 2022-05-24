import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './MainNavigation'
import LoginStack from './LoginStack'

const Routes = () => {
  return (
    <>
    {
        false ? <MainNavigation/> : <LoginStack/>
    }
    </>
  )
}

export default Routes

const styles = StyleSheet.create({})