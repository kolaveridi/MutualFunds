import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class Card extends React.Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.innerContainer} >
               <View style={styles.innerMostContainer}>
                  <Text>{this.props.name}</Text>
                  <Text>Return in 3 years:{this.props.return_3yr}</Text>
                  <Text>Return in 5 years:{this.props.return_5yr}</Text>
                  <Text>Minimum Investment:{this.props.minimum_investment}</Text>
               </View>
               </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    borderWidth: 5,
    borderColor:'black',
    backgroundColor:'white'
},
innerContainer:{
    width: 250,
    height: 200,
    backgroundColor:'#68a0cf',
    marginLeft:60,
    marginTop:70,
    borderRadius:3,
    alignItems:'center'
},
innerMostContainer:{
    marginTop:20,
}
});
export default Card;
