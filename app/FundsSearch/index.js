import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';
import getAllFundsOnSearch from './actions';
import ListFunds from './Components/ListFunds';
import {
    connect
} from 'react-redux';
import Loader from '../Loader';
import TopBarNavigation from './TopBarNav';
function mapStateToProps(state) {

    return {
        searchfunds: state.searchfunds
    };
}


function mapDispatchToProps(dispatch) {

    return {
        getAllFundsOnSearch: (options = {},data) => {
            dispatch(getAllFundsOnSearch(options,data));
        }

    };
}
class SearchFunds extends React.Component{
    constructor(props){
        super(props)
            this.state={
                visible:false
            };
        }

    componentWillReceiveProps(nextProps){
          if(nextProps.searchfunds.funds.pending ===true){
              this.setState({
                  visible:true
              });
          }
          else if(nextProps.searchfunds.funds.pending===false || nextProps.searchfunds.funds.pending===null){
              this.setState({
                  visible:false
              });
          }


    }
    onInputChange=(term)=>{
        let data={
            authorization:'componentWillReceivePropsToken a41d2b39e3b47412504509bb5a1b66498fb1f43a',
            search:term
        };

        this.props.getAllFundsOnSearch('',data);
    }
    render(){

          console.log('searchfunds',this.props.searchfunds);
          /*
           <Loader loading={this.state.visible}/>
            <ListFunds data={this.props.searchfunds} /> */
        return(
             <View style={{ flex: 1 }}>
             <SearchBar onInputChange={this.onInputChange}/>
             <TopBarNavigation/>
             </View>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFunds);
