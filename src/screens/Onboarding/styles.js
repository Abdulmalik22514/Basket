import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/theme';
import {hp, wp} from '../../common/utils';

export const OnboardingStyles = StyleSheet.create({
  skipText: {
    fontFamily: 'Rasa-Bold',
    color: COLORS.orange,
    fontSize: hp(25),
    lineHeight: hp(31),
  },
  bottomButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(24),
    marginTop: hp(30),
  },
  bottomText: {
    fontFamily: 'Rasa-Bold',
    marginTop: hp(150),
    alignSelf: 'center',
    color: COLORS.orange,
    fontSize: hp(25),
    lineHeight: hp(31),
  },
  shoppingText: {
    fontFamily: 'Rasa-Regular',
    color: 'white',
    fontSize: hp(35),
    textAlign: 'center',
    lineHeight: hp(43),
    marginBottom: hp(8),
  },
  textContainer: {
    alignSelf: 'center',
  },
  basketText: {
    fontFamily: 'Rasa-Bold',
    fontSize: hp(35),
    color: 'white',
  },
  logoContainer: {
    width: wp(153),
    height: hp(153),
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginTop: hp(260),
    marginBottom: hp(16),
    alignSelf: 'center',
  },
  trolleyImage: {
    width: wp(50),
    height: hp(40),
  },
});
