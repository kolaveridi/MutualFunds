import React from 'react';
import Fund from './Fund';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
class ListFunds extends React.PureComponent{


    render(){
        console.log('this.props',this.props);
        return(
           <ScrollView>
           <View style={styles.container}>

               {
                   this.props && this.props.funds && this.props.funds.map(item=>{
                       return(
                           <Fund
                              data={item}
                              key={item.scheme_id}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue',
    backgroundColor: '#fff'
  }
});
