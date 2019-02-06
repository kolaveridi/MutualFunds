import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class Fund extends React.Component{

    render(){
        const {expense_ratio,money_control_code,plan_type,nav,last_day_nav,dividend_type_text,launch_date}=this.props.data;
        return(


            <View style={styles.container}>
               <Text>MoneyControlCode : {money_control_code}</Text>
                <Text>ExpenseRatio : {expense_ratio} </Text>
                <Text>PlanType : {plan_type}</Text>
                <Text>Net Asset Value :{nav}</Text>
                <Text>Last Day Net Asset Value:{last_day_nav}</Text>
                <Text>Dividend Type:{dividend_type_text}</Text>
                <Text>Launch Date:{launch_date}</Text>
             </View>

        );
    }
}

export default Fund;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    width: 250,
    height: 200,
    fontSize: 20,
    marginTop:50
  }
});
