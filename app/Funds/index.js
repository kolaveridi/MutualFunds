
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    connect
} from 'react-redux';
import getAllFunds from './actions';


function mapStateToProps(state) {
    console.log('state is ',state.funds);
    return {
        funds: state.funds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllFunds: (options = {}) => {
             console.log('Inside dispatch');
            dispatch(getAllFunds(options));
        }

    };
}




 class Funds extends React.Component{
    componentDidMount(){
        this.props.getAllFunds();
        console.log("lolololo");
    }



     render(){
         console.log('wow');
         console.log('this.props',this.props);
         return(
             <View style={styles.container}>
               <Text>This is working </Text>
               <Text>This is working </Text>
               <Text>This is working </Text>
               <Text>This is working </Text>
               <Text>This is working </Text>
             </View>
         )
     }
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'blue',
     backgroundColor: '#fff'
   }
 });
 export default connect(
     mapStateToProps,
     mapDispatchToProps
 )(Funds);
