import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListFunds from './ListFunds';
class CommodityFunds extends React.Component{
    render(){
        return (
            <View>
               <ListFunds data={this.props.commodities}/>
            </View>
        )
    }
}
export default CommodityFunds;
