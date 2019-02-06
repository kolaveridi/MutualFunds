import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchTerm:'Search ..'
        };
    }
    onInputChange=(text)=>{
        this.setState({
            searchTerm:text
        });
        this.props.onInputChange(text);
    }
    render(){
        return(
            <View >
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.onInputChange(text)}
             />
            </View>
        );

    }

}
const styles = StyleSheet.create({
   input: {
    width:150,
    height:30,
    marginTop:50,
    marginLeft:100,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor : "#FFFFFF",
    borderRadius: 20 ,
    textAlign: 'center',
},

});
export default SearchBar;
