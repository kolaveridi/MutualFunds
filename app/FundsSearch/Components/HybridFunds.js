import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListFunds from './ListFunds';
class HybridFunds extends React.Component{
    render(){
        return (
            <View>
                <ListFunds data={this.props.hybrid}/>
            </View>
        )
    }
}
export default HybridFunds;
