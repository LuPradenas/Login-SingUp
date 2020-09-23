import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Logo from '../logo';
import Form from '../Form';

class Signup extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Logo />
        <Form type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Already have an occount? </Text>
          <Text style={styles.signupButton}>Sign in</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#24273F',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    fontSize: 16,
    color: 'rgba(225,255,255,0.6)',
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Signup;
