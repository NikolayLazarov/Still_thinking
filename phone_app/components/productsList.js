import React, { useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';

const pressHandler = (id) =>{
    console.log(id)
  }

export default function ProductsList({ item }){
    return(        
            <TouchableOpacity onPress = {()=>pressHandler(item.id)}>
                <Text style = {styles.item}>{item.type}</Text>
            </TouchableOpacity>
        );
                }


const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,


    }, 
});