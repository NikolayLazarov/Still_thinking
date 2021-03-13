import 'react-native-gesture-handler';

import { createStackNavigator } from 'react-navigation-stack';
//import { StackRouter } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import HomePage from './applications/screens/home';
import ProductsPage from './applications/screens/productsPage';
import { Button, View, Text} from 'react-native';
import PreviewPage from './applications/screens/previewPage';

import React,{useState} from 'react';

import { globalStyles } from './applications/styles/globalStyles';

const screens = {
  Home:{
      screen: HomePage,
      navigationOptions:{
        title: 'Re-help',
        //headerStyle: {backgroundStyle: '#1bbb70',},
      }
  },

  ProductsPage: {
      screen: ProductsPage
  },
  PreviewPage:{
    screen: PreviewPage,
    //title
  }
  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

/*

export default function App() {
  const HomeStack = createStackNavigator();
  
    return (
    
  <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen
        name = "Home"
        component = {HomePage}  
        options = {{tittle: 'Begin'}}/>

      <HomeStack 
      name = "Products"
      component = {ProductsPage} 
      />
    </HomeStack.Navigator>
  </NavigationContainer>
      );
    }  

/*
const styles = StyleSheet.create({

});

*/