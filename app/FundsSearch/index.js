import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';
import getAllFundsOnSearch from './actions';
import ListFunds from './Components/ListFunds';
import {
    connect
} from 'react-redux';

function mapStateToProps(state) {
    console.log('state inside search is ',state);
    return {
        searchfunds: state.searchfunds
    };
}


function mapDispatchToProps(dispatch) {

    return {
        getAllFundsOnSearch: (options = {},data) => {
             console.log('God is',data);
            dispatch(getAllFundsOnSearch(options,data));
        }

    };
}
class SearchFunds extends React.Component{
    onInputChange=(term)=>{
        let data={
            authorization:'Token a41d2b39e3b47412504509bb5a1b66498fb1f43a',
            search:term
        };

        this.props.getAllFundsOnSearch('abc',data);
    }
    render(){


        return(
         <View>
            <SearchBar onInputChange={this.onInputChange}/>
            <ListFunds data={this.props.searchfunds} />

         </View>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFunds);
