import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/theme';
import {hp, wp} from '../../common/utils';

export const WelcomeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: hp(30),
  },
  familyImage: {
    width: wp(340),
    height: hp(295),
    marginTop: hp(70),
    marginBottom: hp(55),
  },
  storeText: {
    fontFamily: 'Rasa-Bold',
    color: 'white',
    fontSize: hp(45),
    lineHeight: hp(54),
    marginTop: hp(8),
  },
  productContainer: {
    width: wp(294),
  },
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
  welcomeText: {
    fontFamily: 'Rasa-Regular',
    color: 'white',
    fontSize: hp(26),
    lineHeight: hp(34),
    textAlign: 'center',
  },
  productText: {
    fontFamily: 'Rasa-Regular',
    color: 'white',
    fontSize: hp(22),
    lineHeight: hp(28),
    textAlign: 'center',
    marginTop: hp(5),
  },
});
