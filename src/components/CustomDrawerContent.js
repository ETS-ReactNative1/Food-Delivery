import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import CustomDrawerItem from './CustomDrawerItem';
import profile from '../assets/icons/gg_profile.png';
import orders from '../assets/icons/icons8_buy.png';
import offerAndPromo from '../assets/icons/ic_outline-local-offer.png';
import privacyPolicy from '../assets/icons/ic_outline-sticky-note-2.png';
import security from '../assets/icons/whh_securityalt.png';
import arrow from '../assets/icons/arrow.png';
import Divider from './Divider';
import {useDispatch} from 'react-redux';
import {userLogout} from '../redux/actions/auth';

const CustomDrawerContent = () => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.drawerItem}>
          <CustomDrawerItem label="Profile" icon={profile} />
          <Divider />
          <CustomDrawerItem label="orders" icon={orders} />
          <Divider />
          <CustomDrawerItem label="offer and promo" icon={offerAndPromo} />
          <Divider />
          <CustomDrawerItem label="Privacy policy" icon={privacyPolicy} />
          <Divider />
          <CustomDrawerItem label="Security" icon={security} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.signOut}
            onPress={() => dispatch(userLogout())}>
            <Text style={styles.item}>Sign-out</Text>
            <Image source={arrow} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:16
  },
  drawerItem: {
    flex: 1,
    marginTop: 110,
    justifyContent: 'flex-start',
  },
  signOut: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 16,
    alignItems: 'center',
    paddingLeft: 12,
    borderRadius: 16,
  },
  footer: {
    flex: 0.17,
    justifyContent: 'flex-end',
  },
  icon: {
    width: 30,
    height: 20,
  },
  item: {
    marginRight: 15,
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});
