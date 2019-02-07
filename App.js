import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import Funds from './app/Funds';
import SearchFunds from './app/FundsSearch';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Loader from './app/Loader';
import Card from './app/FundsSearch/Components/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/Ionicons";


const Tab =  createBottomTabNavigator({
  Home: Funds,
  Search: SearchFunds,
});
const TabNavigation=createAppContainer(Tab);



class App extends React.Component {
  render() {
    console.disableYellowBox=true;
    return (
        <Provider store={store}>
           <SearchFunds/>
        </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',

  }
});
export default App;
