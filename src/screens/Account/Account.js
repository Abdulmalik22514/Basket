import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {MenuIcon, SearchIcon} from '../../../assets/svgs';
import {Container} from '../../common/container';
import icons from '../../common/icons';
import {COLORS} from '../../common/theme';
import {wp, hp} from '../../common/utils';
import {CustomHeader} from '../../components/CustomHeader';

const Account = ({navigation}) => {
  return (
    <>
      <Container>
        <View style={{backgroundColor: COLORS.background}}>
          <View style={styles.headerView}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.trolleyImage}
                source={icons.trolley}
                resizeMode="contain"
              />
            </View>
            <View style={styles.searchBox}>
              <TouchableOpacity activeOpacity={0.8}>
                <SearchIcon />
              </TouchableOpacity>
              <TextInput
                style={styles.searchInput}
                placeholder="Search in basket"
                placeholderTextColor={COLORS.background}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}>
              <MenuIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={icons.daniel}
              resizeMode="contain"
              style={{width: wp(75), height: hp(75)}}
            />
            <View style={{marginLeft: wp(18)}}>
              <Text style={styles.daniel}>Daniel Obi</Text>
              <Text style={styles.email}>danielobi@gmail.com</Text>
            </View>
          </View>
          <View style={styles.itemCard}></View>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  email: {
    fontFamily: 'Rasa-Regular',
    fontSize: hp(18),
    lineHeight: hp(22),
    color: COLORS.background,
  },
  daniel: {
    fontFamily: 'Rasa-SemiBold',
    fontSize: hp(26),
    lineHeight: hp(32),
    color: COLORS.background,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(25),
    paddingHorizontal: wp(16),
  },
  profileContainer: {
    flex: 1,
    backgroundColor: COLORS.orange,
    height: hp(225),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(15),
  },
  searchInput: {
    fontSize: hp(14),
    marginLeft: wp(20),
    paddingBottom: hp(9),
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    height: hp(35),
    width: wp(247),
    paddingLeft: wp(27),
  },
  logoContainer: {
    width: wp(44),
    height: hp(44),
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  trolleyImage: {
    width: wp(38),
    height: hp(25),
  },
  itemCard: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    borderTopEndRadius: 12,
    marginHorizontal: wp(20),
    height: hp(598),
  },
});

export default Account;
