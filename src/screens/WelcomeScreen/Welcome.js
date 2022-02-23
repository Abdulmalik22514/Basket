import React from 'react';
import {Text, View, Image} from 'react-native';
import {Container} from '../../common/container';
import icons from '../../common/icons';
import {COLORS} from '../../common/theme';
import CustomButton from '../../components/CustomButton';
import {WelcomeStyles as styles} from './styles';

const WelcomeScreen = ({navigation}) => {
  return (
    <>
      <Container backgroundColor={COLORS.background}>
        <View style={styles.container}>
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
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.storeText}>basket online store</Text>
          <View style={styles.productContainer}>
            <Text style={styles.productText}>
              basket is the no1 online store for both new and used products.
            </Text>
          </View>
          <Image
            source={icons.family}
            resizeMode="contain"
            style={styles.familyImage}
          />
          <CustomButton
            label="GET STARTED"
            hasIcon
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </Container>
    </>
  );
};

export default WelcomeScreen;
