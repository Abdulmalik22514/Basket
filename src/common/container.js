import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

export const Container = ({
  children,
  //   barColor = Colors.Background,
  backgroundColor,
}) => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView />
      <View style={{backgroundColor, flex: 1}}>{children}</View>
    </>
  );
};
