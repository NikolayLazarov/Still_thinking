import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import SearchBar from '../components/searchBar';
import MOCK_DATA from '../assets/MOCK_DATA';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function ProductsPage({navigation}){
    //const MOCK_DATA = require('./applications/assets/MOCK_DATA');


 return(
        <SafeAreaView style = {globalStyles.container}>
        {/**<Header/> */}
            <SearchBar/>
                <View>
                <FlatList 
                data = {MOCK_DATA}
                renderItem = {({item}) =>(
                    <TouchableOpacity onPress = {()=> navigation.navigate('PreviewPage', item)}>
                    <Text style = {globalStyles.titleText}>{item.first_name}</Text>
                    </TouchableOpacity>
                )}
                
                /></View>
        </SafeAreaView>
    )
}