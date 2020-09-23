import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#ffffff"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 50,
    width: 300,
    backgroundColor: 'rgba(225,255,255,0.3)',
    borderRadius: 25,
    marginVertical: 15,
    paddingHorizontal: 25,
    color: '#ffffff',
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    width: 300,
    backgroundColor: '#414571',
    marginVertical: 15,
    borderRadius: 25,
    paddingVertical: 16,
  },
});

export default Form;
