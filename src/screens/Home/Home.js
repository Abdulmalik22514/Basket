import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container} from '../../common/container';

const Home = () => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <Text style={styles.text}>Home Screen</Text>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Rasa-Bold',
    fontSize: 35,
  },
});

export default Home;
