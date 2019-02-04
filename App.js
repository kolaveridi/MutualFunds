import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Funds from './app/Funds';
import { StyleSheet, Text, View } from 'react-native';
class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Funds/>
        </Provider>

    );
  }
}
export default App;
