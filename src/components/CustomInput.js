import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Eye_Off} from '../../assets/svgs';
import {COLORS} from '../common/theme';
import {hp, wp} from '../common/utils';

export const CustomInput = ({
  icon,
  placeholder,
  value,
  onChageText,
  isPassowrd,
}) => {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={COLORS.background}
        placeholder={placeholder}
        value={value}
        onChangeText={onChageText}
        secureTextEntry={show && isPassowrd}
      />
      {isPassowrd ? (
        <TouchableOpacity
          style={styles.eyeStyle}
          onPress={() => setShow(!show)}
          activeOpacity={0.8}>
          <Eye_Off />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.orange,
    marginBottom: hp(23),
  },
  textInput: {
    fontFamily: 'Rasa-SemiBold',
    fontSize: hp(22),
    lineHeight: hp(27),
    paddingBottom: hp(-5),
    marginLeft: wp(18),
    width: wp(250),
    marginRight: wp(20),
  },
});
