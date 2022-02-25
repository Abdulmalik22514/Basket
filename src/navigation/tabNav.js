import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {hp} from '../common/utils';
import Home from '../screens/Home/Home';
import Saved from '../screens/Favorites/Saved';
import Cart from '../screens/Cart/Cart';
import Account from '../screens/Account/Account';
import icons from '../common/icons';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      tabBarOptions={{
        showLabel: false,
        style: {
          height: hp(86),
          backgroundColor: '#E3E3E3',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon focused={focused} icon={icons.home} label={'Home'} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon focused={focused} icon={icons.saved} label={'Saved'} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.account}
                label={'Account'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon focused={focused} icon={icons.cart} label={'Cart'} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarCustomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tabs;
