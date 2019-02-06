import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class Fund extends React.Component{

    render(){
        const {expense_ratio,money_control_code,plan_type,nav,last_day_nav,dividend_type_text,launch_date}=this.props.data;
        return(


            <View style={styles.container}>

               <Text style={styles.text}>MoneyControlCode : {money_control_code}</Text>
                <Text style={styles.text}>ExpenseRatio : {expense_ratio} </Text>
                <Text style={styles.text}>PlanType : {plan_type}</Text>
                <Text style={styles.text}>Net Asset Value :{nav}</Text>
                <Text style={styles.text}>Last Day Net Asset Value:{last_day_nav}</Text>
                <Text style={styles.text}>Dividend Type:{dividend_type_text}</Text>
                <Text style={styles.text}>Launch Date:{launch_date}</Text>
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
    backgroundColor:'#68a0cf',
    width: 250,
    height: 200,
    fontSize: 20,
    marginTop:50,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop:20,
    paddingBottom:20,
    overflow: 'hidden'

},
text:{
    color:'#fff',
      textAlign:'center',

}
});
