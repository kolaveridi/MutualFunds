import React from 'react';
import Fund from './Fund';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class ListFunds extends React.Component{
    render(){
        
        return(
            <ScrollView>
           <View>
             {
                 
            
                 this.props &&  this.props.data.map((item)=>{
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
