import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Card from './Card.js';
class Fund extends React.Component{
    render(){
        const {name,rating,category,return_3yr,return_5yr,minimum_investment}=this.props.data;


        return(
         <View>
             <Card
                  name={name}
                  rating={rating}
                  category={category}
                  return_3yr={return_3yr}
                  return_5yr={return_5yr}
                  minimum_investment={minimum_investment}
               />

         </View>

        );
    }
}
export default Fund;
