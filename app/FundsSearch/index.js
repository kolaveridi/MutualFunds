import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBarComponent from './SearchBar';
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
                    visible:false,
                    equity:[],
                    debt:[],
                    hybrid:[],
                    commodities:[],

                }
            };



    componentWillReceiveProps(nextProps){
         console.log('log1');
          console.log('nextProps',nextProps);
          let newEquity=[];
          let newDebit=[];
          let newHybrid=[];
          let newCommodities=[];
          if( nextProps.searchfunds.funds.data && nextProps.searchfunds.funds.data.search_results){
                let data=nextProps.searchfunds.funds.data.search_results;
                for(let i=0;i<data.length;i++){
                    let item=data[i];
                    if(item.category === "debt"){
                        newDebit.push(item);
                    }
                    if(item.category === "equity"){
                        newEquity.push(item);
                    }
                    if(item.category === "hybrid"){
                        newHybrid.push(item);
                    }
                    if(item.category === "commodities"){
                        newCommodities.push(item);
                    }


                }

          }

          this.setState({
              equity:newEquity,
              debt:newDebit,
              commodities:newCommodities,
              hybrid:newHybrid,

          });

    }
    onInputChange=(term)=>{
        let data={
            authorization:'Token a41d2b39e3b47412504509bb5a1b66498fb1f43a',
            search:term
        };

        this.props.getAllFundsOnSearch('',data);
    }
    ComponentDidUpate(){
       console.log('log2');
    }
    render(){

           console.log('state lol ',this.state.funds);

        return(
             <View style={{ flex: 1,backgroundColor:'white' }}>
             <View style={{marginTop:10}}>
             <SearchBarComponent onInputChange={this.onInputChange}/>
             </View>

             <TopBarNavigation
                data={this.props.searchfunds}
                equity={this.state.equity}
                debt={this.state.debt}
                commodities={this.state.debt}
                hybrid={this.state.hybrid}

                />
             </View>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFunds);
