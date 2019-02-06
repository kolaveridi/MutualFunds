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
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.onInputChange(text)}
                value={this.state.searchTerm}
             />
            </View>
        );

    }

}
const styles = StyleSheet.create({
   input: {
    backgroundColor:'grey',
    width:150,
    height:30,
    marginTop:50,
    marginLeft:100
}
});
export default SearchBar;
