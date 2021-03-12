//import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';


export default function App() {
  {/*func proba*/}
  const [types, setTypes] = useState([
    {type: 'clothes', key:'1'},
    {type: 'cars', key:'2'},
    {type: 'books', key:'3'},
    {type: 'Tvs', key:'4'},
    {type: 'computers', key:'5'},
  ])


  return (
    <SafeAreaView style={styles.container}>

     <View style = {styles.header}>
       {/*name of project*/ }
       <Text style = {{
         fontSize: 50,
         fontWeight: "bold",
         alignSelf: "center",
         color: "white",
       }
       }>The name is.</Text>
     </View>

     <View style = {styles.searchBar}>
       
       <Text></Text>
       <TextInput
       placeholder = 'write somethind' 
       style={styles.searchBarStyles}
       onChangeText = {() =>setName()}
       />
       
       </View>

      <View style= {styles.body}>
{/*
       <FlatList
        numColumns = {2}
        keyExtractor = {(item) => item.id}
        data = {types}
        renderItems = {({item}) => (
          <Text style = {styles.item}>{item.name}</Text>
        )}
       />
 */}

        <ScrollView>
        {types.map((item) => {
          return (
            <View key = {item.key}>
              <Text style = {styles.item}>{item.type}</Text>
            </View>
          )
        })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
    height: "10%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    
  },

  header: {
    flex: 0.1,
  backgroundColor: '#00ff80',
  },

  searchBarStyles: {
    borderWidth: 1,
    borderColor: '#777',
    width:"50%", //take dimensons
    alignSelf: "center",

  },

  searchBar: {
    flex: 0.1,
    backgroundColor: "#fff",

  },

  body: {
    flex: 1,
    backgroundColor: '#fff',

  },
  item:{
    borderWidth: 2,
    marginTop: 24,
    padding:30,
    borderColor:"#00ff80",
    //backgroundColor: '#00ff80',
    fontSize: 24,
    width:150,
    


  
  }

});