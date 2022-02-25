import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {KeyIcon, MailIcon, Tick} from '../../../assets/svgs';
import {Container} from '../../common/container';
import icons from '../../common/icons';
import CustomButton from '../../components/CustomButton';
import {CustomHeader} from '../../components/CustomHeader';
import {CustomInput} from '../../components/CustomInput';
import {SocialButton} from '../../components/SocialButton';
import {LoginStyles as styles} from './styles';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheck = () => {
    return setChecked(!checked);
  };

  const userDetails = () => {
    const data = {
      email,
      password,
    };
    setLoading(true);
    axios
      .post(
        'https://kasppe.com.ng/farmsolhub/wp-json/niishcloud_api/v1/login/',
        data,
      )
      .then(res => {
        if (res.data.status === 'success') {
          navigation.navigate('Dashboard');
        } else {
          Alert.alert('Error', 'Invalid details');
        }
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Container>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <CustomHeader />
            <Text style={styles.loginText}>Log into your account</Text>
            <View style={styles.emailContainer}>
              <Text style={styles.emailText}>
                Enter your email and password to access your account or create
                an account.
              </Text>
            </View>
          </View>
          <CustomInput
            placeholder="davidobi@gmail.com"
            icon={<MailIcon />}
            value={email}
            onChageText={setEmail}
          />
          <CustomInput
            placeholder="***********"
            icon={<KeyIcon />}
            value={password}
            onChageText={setPassword}
            isPassowrd
          />
          <View style={styles.rememberMeBox}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={handleCheck}
              activeOpacity={0.9}>
              {checked && <Tick />}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <View style={styles.loginContainer}>
            <CustomButton
              loading={loading}
              label="LOGIN"
              isDark
              onPress={() => userDetails()}
            />
            <Text style={styles.forgotPass} onPress={null}>
              Forgot Password
            </Text>
            <Text style={styles.continue}>- Or continue with -</Text>
          </View>
          <View style={styles.socialButtons}>
            <SocialButton label="Facebook" icon={icons.facebook} />
            <SocialButton label="Google" icon={icons.google} />
          </View>
          <View style={styles.noAccountBox}>
            <Text style={styles.rememberText}>Don’t have an account?</Text>
            <Text style={styles.signup} onPress={null}>
              Sign up
            </Text>
          </View>
        </View>
      </Container>
    </>
  );
};

export default LoginScreen;
