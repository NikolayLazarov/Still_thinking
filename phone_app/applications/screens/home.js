import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { StackRouter } from 'react-navigation';

import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import SearchBar from '../components/searchBar'

export default function HomePage({navigation}){
    
    const [types] = useState([
        {type: 'clothes', key:'1'},
        {type: 'cars', key:'2'},
        {type: 'books', key:'3'},
        {type: 'Tvs', key:'4'},
        {type: 'computers', key:'5'},
        ]);

    //const {navigate}   = this.props.navigation;

    return(
        <SafeAreaView style = {globalStyles.container}>
          <SearchBar/>
              <View>
                <FlatList 
                data = {types}
                renderItem = {({item}) =>(
                    <TouchableOpacity onPress = {()=> navigation.navigate('ProductsPage')}>
                    <Text style = {globalStyles.titleText}>{item.type}</Text>
                    </TouchableOpacity>
                )}
                
                /></View> 
              
                
        </SafeAreaView>
    );
}
