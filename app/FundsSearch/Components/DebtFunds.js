import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import ListFunds from './ListFunds';

class DebtFunds extends React.Component{
    render(){
        return (
            <View>
              <ListFunds data={this.props.debt}/>
            </View>
        )
    }
}
export default DebtFunds;
