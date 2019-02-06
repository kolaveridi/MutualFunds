import React from 'react';
import Fund from './Fund';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class ListFunds extends React.Component{
    render(){
        console.log("hmmmmm",this.props.data);
        return(
            <ScrollView>
           <View>
             {
                 this.props
                 && this.props.data
                 && this.props.data.funds
                 && this.props.data.funds.data
                 && this.props.data.funds.data.search_results &&
                 this.props.data.funds.data.search_results.map((item)=>{
                     return(
                         <Fund
                           data={item}
                           />
                     );
                 })
             }
           </View>
           </ScrollView>
        );
    }
}
export default ListFunds;
