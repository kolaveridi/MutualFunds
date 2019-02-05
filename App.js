import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import Funds from './app/Funds';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'blue'}}>
        <Text>Home!</Text>
      </View>
    );
  }
}



const Tab =  createBottomTabNavigator({
  Home: Funds,
  Settings: HomeScreen,
});
const TabNavigation=createAppContainer(Tab);



class App extends React.Component {
  render() {
    console.disableYellowBox=true;
    return (
        <Provider store={store}>
           <TabNavigation/>
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


// import React from 'react';
// import { Text, View } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
//
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }
//
// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }
//
// const TabNavigator = createBottomTabNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// });
//
