import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
//import SearchBar from '../components/searchBar';
import ProductsList from '../components/searchBar';
import { NavigationEvents } from 'react-navigation';
//import Home from './applications/screens/home';

export default function HomePage(){
    const [types, setTypes] = useState([
        {type: 'clothes', id:'1'},
        {type: 'cars', id:'2'},
        {type: 'books', id:'3'},
        {type: 'Tvs', id:'4'},
        {type: 'computers', id:'5'},
        ]);
    return(
        <SafeAreaView style = {globalStyles.container}>

            {/* /<Header/> <SearchBar/> */}
               
                <View>
                <FlatList 
                data = {types}
                renderItem = {({item}) =>(
                    <TouchableOpacity onPress = {()=> navigation.navigate('ProductPage', item)}>
                    <Text style = {globalStyles.titleText}>{item.type}</Text>
                    </TouchableOpacity>
                )}
                
                /></View>
                
        </SafeAreaView>
    );
}
