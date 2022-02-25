import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../common/theme';
import {hp, wp} from '../common/utils';

const TabIcon = ({focused, icon, label}) => {
  return (
    <View style={styles.tabContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.tabIcon,
          {tintColor: focused ? COLORS.orange : COLORS.background},
        ]}
      />
      <Text
        style={[
          styles.tabIconLabel,
          {color: focused ? COLORS.orange : COLORS.background},
        ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconLabel: {
    fontFamily: 'Rasa-Regular',
    fontSize: hp(20),
    lineHeight: hp(24),
  },
  tabIcon: {
    width: wp(40),
    height: hp(33),
  },
});

export default TabIcon;
