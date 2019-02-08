import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class Card extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                  <Text style={styles.text}>{this.props.name || 'ICICI Prudential Nifty Next 50 Index Fund Direct Plan'}</Text>
                  <View style={styles.returncontainer}>
                       <Text style={styles.text}>Minimum Investment:{this.props.minimum_investment || 5000}</Text>
                        <Text style={styles.text}>Rating:{this.props.rating || 5}</Text>
                        <View style={styles.innerContainer}>
                        <Text style={styles.text}>3 years:{this.props.return_3yr || 17.89}</Text>
                       <Text style={styles.text}>5 years:{this.props.return_5yr || 10.89}</Text>
                       </View>
                  </View>

             </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      backgroundColor:'#68a0cf',
      alignSelf: 'stretch',
      height: 150,
      fontSize: 20,
      marginTop:20,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      paddingTop:5,
      paddingBottom:5,
      overflow: 'hidden',
   },
   text:{
      color:'#fff',
      marginLeft:5


   },
   returncontainer:{
      flex: 1,
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'flex-start',
      marginLeft:10
  },
  innerContainer:{
       flex:1,
       flexDirection:'column',
       alignItems:'flex-end',
       marginLeft:250,
       marginBottom:10

  }
})
export default Card;
