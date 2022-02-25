import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Container} from '../../common/container';

const Saved = () => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <Text style={styles.text}>Favorites Screen</Text>
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

export default Saved;
