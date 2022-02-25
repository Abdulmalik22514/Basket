import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/theme';
import {hp, wp} from '../../common/utils';

export const LoginStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(28),
    paddingTop: hp(20),
  },
  noAccountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(30),
  },
  signup: {
    fontFamily: 'Rasa-SemiBold',
    fontSize: hp(22),
    color: COLORS.orange,
    lineHeight: hp(30),
  },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(30),
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: hp(50),
  },
  continue: {
    fontFamily: 'Rasa-Regular',
    fontSize: hp(17),
    lineHeight: hp(19),
  },
  forgotPass: {
    color: COLORS.orange,
    fontFamily: 'Rasa-Regular',
    fontSize: hp(22),
    lineHeight: hp(26),
    textDecorationLine: 'underline',
    marginVertical: hp(35),
  },
  rememberText: {
    fontFamily: 'Rasa-Regular',
    fontSize: hp(22),
  },
  checkBox: {
    borderColor: COLORS.lightBackground,
    borderWidth: 1,
    height: hp(20),
    width: wp(19),
    borderRadius: 1,
    marginRight: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberMeBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailText: {
    textAlign: 'center',
    fontFamily: 'Rasa-Regular',
    fontSize: hp(22),
    lineHeight: hp(28),
    color: COLORS.background,
  },
  loginText: {
    fontFamily: 'Rasa-Bold',
    fontSize: hp(32),
    color: COLORS.background,
    lineHeight: hp(39),
  },
  emailContainer: {
    width: wp(260),
    height: hp(75),
    marginTop: hp(20),
    marginBottom: hp(50),
  },
});
