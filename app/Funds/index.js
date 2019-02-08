
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    connect
} from 'react-redux';
import getAllFunds from './actions';
import ListFunds from './Components/ListFunds';
import getAllFundsOnSearch from '../FundsSearch/actions';
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
        ,  getAllFundsOnSearch: (options = {},data) => {
            dispatch(getAllFundsOnSearch(options,data));
        }

    };
}


 class Funds extends React.Component{
    componentDidMount(){
        this.loadFunds();
        this.loadsearchFunds();

    }
    loadFunds=()=>{
        const{pending}=this.props.funds.funds;
        if(!pending){
            this.props.getAllFunds();
        }
    }
    loadsearchFunds=()=>{
        let data={
            authorization:'Token a41d2b39e3b47412504509bb5a1b66498fb1f43a',
            
        };
        this.props.getAllFundsOnSearch('',data);
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
