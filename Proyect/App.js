/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Main from "./src/Main";
import persist from "./src/config/store";

const persistStore = persist();

class App extends Component {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#24273F',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
