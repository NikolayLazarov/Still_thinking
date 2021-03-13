import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { StackRouter } from 'react-navigation';

import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import SearchBar from '../components/searchBar'

export default function ProductsPage({navigation}){
    const [types] = useState([
        {type: 'clothes', id:'1'},
        {type: 'cars', id:'2'},
        {type: 'books', id:'3'},
        {type: 'Tvs', id:'4'},
        {type: 'computers', id:'5'},
        ]);
    return(
        <SafeAreaView style = {globalStyles.container}>
            <SearchBar/>
                <View>
                <FlatList 
                data = {types}
                renderItem = {({item}) =>(
                    <TouchableOpacity onPress = {()=> navigation.navigate('PreviewPage', item)}>
                    <Text style = {globalStyles.titleText}>{item.type}</Text>
                    </TouchableOpacity>
                )}
                
                /></View>
        </SafeAreaView>
    )
}