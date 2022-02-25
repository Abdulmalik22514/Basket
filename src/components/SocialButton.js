import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../common/theme';
import {hp, wp} from '../common/utils';

export const SocialButton = ({label, icon, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={icon} resizeMode="contain" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: wp(32),
    height: hp(32),
    marginRight: wp(14),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(163),
    height: hp(48),
    borderColor: COLORS.lightBackground,
    borderWidth: 2,
    borderRadius: 8,
  },
  label: {
    fontFamily: 'Rasa-SemiBold',
    fontSize: hp(18),
    lineHeight: hp(22),
    color: COLORS.background,
  },
});
