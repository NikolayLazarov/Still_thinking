import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default class DataList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isloading: true,
            dataSource: null,
        }
    }

    componentDidMount(){

        return fetch ('link')
        .then ( ( response ) => response.json() )
        .then ( (responseJson)=>{
            this.setState({
                isloading:false,
                dataSource: responseJson.movies,
            })

        })
    .catch((error) =>{
        console.log(error)
    });
}

    render(){
    
        if (this.state.isloading){
    
            return(
                <View style = {styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {    
            let movies = this.state.dataSource.map((val,key ) =>{
                return<View key = {key} style={styles.item}><Text>{val.title}</Text></View>
            });
            return(
                <View style = {styles.container}>
                    {movies}
                </View>
             );
        }          
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})