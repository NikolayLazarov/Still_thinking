import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import SearchBar from '../components/searchBar'
import MOCK_DATA from '../assets/MOCK_DATA';

export default function HomePage({navigation}){
    //const [types] = useState(MOCK_DATA);

    const [types] = useState([
        {type: 'clothes', id:'1', item: 'hat',},
        {type: 'cars', id:'2'},
        {type: 'books', id:'3'},
        {type: 'Tvs', id:'4'},
        {type: 'computers', id:'5'},
        {type: 'clothes', id: '6', item: 'shirt',},
        ]);

    //const {navigate}   = this.props.navigation;

    return(
        <SafeAreaView style = {globalStyles.container}>
          <SearchBar/>
              <View>
                <FlatList 
                data = {types}
                renderItem = {({item}) =>(
                    <TouchableOpacity onPress = {()=> navigation.navigate('ProductsPage',item)}>
                    <Text style = {globalStyles.titleText}>{item.type}</Text>
                    </TouchableOpacity>
                )}
                
                /></View> 
              
        </SafeAreaView>
    );
}