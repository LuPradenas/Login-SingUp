import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 130, height: 150}}
          source={require('../components/images/L.png')}
        />
        <Text style={styles.logoText}>Welcome to My app.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(225,255,255,0.7)',
  },
});

export default Logo;
