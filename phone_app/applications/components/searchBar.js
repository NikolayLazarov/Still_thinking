import React from  'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar(){
    return(
        <View style = {styles.searchBarStyles}>
        <Icon name = "ios-search" style = {{fontSize: 24}}></Icon>
        <Text></Text> 
        <TextInput
        placeholder = 'write something' 
        style={styles.searchBarText}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarStyles: {
        //marginTop:15,
        flexDirection: 'row',
        backgroundColor: "#fff",
        padding: 5,
        alignItems:'center',
      },
      searchBarText: {
        borderWidth: 1,
        borderColor: '#777',
        width:"50%", //take dimensons
        justifyContent: "center",
        paddingHorizontal: 5,
    
      },
})