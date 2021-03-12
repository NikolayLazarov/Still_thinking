//import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, SafeAreaView, StatusBar, FlatList,View} from 'react-native';
import Header from './components/header';
import SearchBar from './components/searchBar';
import ProductsList from './components/productsList';



export default function App() {
  {/*func proba*/}
  const [types, setTypes] = useState([
    {type: 'clothes', id:'1'},
    {type: 'cars', id:'2'},
    {type: 'books', id:'3'},
    {type: 'Tvs', id:'4'},
    {type: 'computers', id:'5'},
    ]);

  return (
    <SafeAreaView style={styles.container}>
     {/*header*/}
     <Header/>
     <SearchBar/>
     <View style = {styles.list}>
     <FlatList 
      data = {types}
      renderItem = {({item}) =>(
      <ProductsList item ={item} />
      )}
      />
      </View>
  
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection: "column",
    flex:1,
    backgroundColor:'#fff',
    width: "100%",
    height: "10%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  list:{
    marginTop:10,

  }
});