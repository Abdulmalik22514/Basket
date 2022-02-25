import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Container = ({
  children,
  //   barColor = Colors.Background,
  backgroundColor,
}) => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView />
      <KeyboardAwareScrollView style={{backgroundColor, flex: 1}}>
        {children}
      </KeyboardAwareScrollView>
    </>
  );
};
