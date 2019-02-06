import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class Card extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                  <Text style={styles.text}>{this.props.name}</Text>
                  <Text style={styles.text}>Return in 3 years:{this.props.return_3yr}</Text>
                  <Text style={styles.text}>Return in 5 years:{this.props.return_5yr}</Text>
                  <Text style={styles.text}>Minimum Investment:{this.props.minimum_investment}</Text>
             </View>
        )
    }
}
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
      overflow: 'hidden',
      marginLeft:50

   },
   text:{
      color:'#fff',
        textAlign:'center',

   }
})
export default Card;
