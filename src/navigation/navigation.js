import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import WelcomeScreen from '../screens/WelcomeScreen/Welcome';
import LoginScreen from '../screens/Login/LoginScreen';
import Tabs from './tabNav';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
