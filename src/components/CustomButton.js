import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Arrow} from '../../assets/svgs';
import {COLORS} from '../common/theme';
import {hp, wp} from '../common/utils';

const CustomButton = ({label, hasIcon, onPress, isDark}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isDark && styles.darkBackground]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.label}>{label}</Text>
      {hasIcon ? <Arrow /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(48),
    borderRadius: 8,
    backgroundColor: COLORS.orange,
    width: wp(289),
    justifyContent: 'center',
  },
  darkBackground: {
    backgroundColor: COLORS.background,
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    fontFamily: 'Rasa-Medium',
    fontSize: hp(22),
    lineHeight: hp(26),
    color: 'white',
    marginRight: wp(20),
  },
});

export default CustomButton;
