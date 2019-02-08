import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListFunds from './ListFunds';
class EquityFunds extends React.Component{


    render(){
        console.log('jammer',this.props.equity);
        return (
            <View>
                <ListFunds data={this.props.equity}/>
            </View>
        )
    }
}
export default EquityFunds;
