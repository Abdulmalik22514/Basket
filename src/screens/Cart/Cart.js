import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Container} from '../../common/container';

const Cart = () => {
  return (
    <>
      <Container>
        <View style={styles.container}>
          <Text style={styles.text}>Cart Screen</Text>
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

export default Cart;
