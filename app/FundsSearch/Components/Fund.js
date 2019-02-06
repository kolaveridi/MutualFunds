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

// amc: "hdfc_mutual_fund"
// category: "hybrid"
// details_id: "8A5CD88EA3ADBF5D18A1251B"
// id: 1144
// minimum_investment: 5000
// name: "HDFC Hybrid Eq Direct Plan"
// rating: 4
// return_3yr: 12.57
// return_5yr: 14.44
// riskometer: "Moderately High"
// sub_category: "aggressive_allocation"
// url_name: "hdfc-hybrid-equity-fund"
// yoy_return: -6.97
