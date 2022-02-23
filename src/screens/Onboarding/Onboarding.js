import React from 'react';
import {Image, Text, View} from 'react-native';
import {Container} from '../../common/container';
import icons from '../../common/icons';
import {COLORS} from '../../common/theme';
import {OnboardingStyles as styles} from './styles';

const Onboarding = ({navigation}) => {
  return (
    <>
      <Container backgroundColor={COLORS.background}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.trolleyImage}
            source={icons.trolley}
            resizeMode="contain"
          />
          <Text style={styles.basketText}>basket</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.shoppingText}>Start Shopping.</Text>
          <Text style={styles.shoppingText}>Stay Happy.</Text>
          <Text style={styles.shoppingText}>Anytime.</Text>
        </View>
        <Text style={styles.bottomText}>Basket Online Marketplace</Text>
        <View style={styles.bottomButtons}>
          <Text style={styles.skipText}>Skip</Text>
          <Text
            style={styles.skipText}
            onPress={() => navigation.navigate('Welcome')}>
            Next
          </Text>
        </View>
      </Container>
    </>
  );
};

export default Onboarding;
