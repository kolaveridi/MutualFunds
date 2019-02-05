
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    connect
} from 'react-redux';
import getAllFunds from './actions';
import ListFunds from './Components/ListFunds';

function mapStateToProps(state) {
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
        this.loadFunds();
    }
    loadFunds=()=>{
        const{pending}=this.props.funds.funds;
        if(!pending){
            this.props.getAllFunds();
        }
    }

     render(){
         const {funds}=this.props.funds.funds.data;
         return(
             <View style={styles.container}>
                <ListFunds funds={funds}/>

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
