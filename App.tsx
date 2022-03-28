import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Board } from './components/Board/Board';

import store from './store/store';

const styles = StyleSheet.create({
  topBar: {
    marginBottom: 40,
    backgroundColor: '#1565c0',
    alignSelf: 'stretch',
    paddingTop: 40,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    color: 'white',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.header}>Tic Tac Toe Lucia's Edition</Text>
        </View>
        <Board />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
