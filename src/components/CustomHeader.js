import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import icons from '../common/icons';
import {COLORS} from '../common/theme';
import {hp, wp} from '../common/utils';

export const CustomHeader = () => {
  return (
    <View style={styles.topView}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.trolleyImage}
          source={icons.trolley}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.basketText}>basket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(60),
    width: wp(171),
  },
  logoContainer: {
    width: wp(44),
    height: hp(44),
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    marginRight: wp(12),
  },
  trolleyImage: {
    width: wp(38),
    height: hp(25),
  },
  basketText: {
    fontFamily: 'Rasa-Bold',
    fontSize: hp(32),
    color: COLORS.orange,
  },
});
