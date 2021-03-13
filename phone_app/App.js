//import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, FlatList,View, TouchableOpacity} from 'react-native';
//import Header from './applications/components/header';
import { globalStyles } from './applications/styles/globalStyles';


import Navigator from './applications/routs/homeStack';


export default function App() {
return (
    
    <Navigator/>
      );
}


const styles = StyleSheet.create({

});