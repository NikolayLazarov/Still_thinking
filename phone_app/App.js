import 'react-native-gesture-handler';

import { createStackNavigator } from 'react-navigation-stack';
//import { StackRouter } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import HomePage from './applications/screens/home';
import ProductsPage from './applications/screens/productsPage';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import PreviewPage from './applications/screens/previewPage';


//import React,{useState} from 'react';

//import { globalStyles } from './applications/styles/globalStyles';

const screens = {
  Home:{
      screen: HomePage,
    },

  ProductsPage: {
      screen: ProductsPage,
  },
  PreviewPage:{
    screen: PreviewPage,
    //title
  }
  
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);




/*
const styles = StyleSheet.create({

});

*/