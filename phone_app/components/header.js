import React from  'react';
import {StyleSheet, Text, View} from 'react-native';


export default function Header(){
    return(
        <View style = {styles.header}>
        {/*name of project*/ }
        <Text style = {styles.textHeader}>The name is.</Text>
     </View>
    )
}

const styles = StyleSheet.create({
    header: {
    flex: 0.15,
    backgroundColor: '#00aa80',
    padding: 20,
    },
    textHeader:{
        
        fontSize: 50,
        fontWeight: "bold",
        justifyContent: "center",
        color: "white",
    },
})