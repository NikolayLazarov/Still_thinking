import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function ProductsPage(){
    return(
        <SafeAreaView style = {globalStyles.container}>
            <Text>Products Screen</Text>
        </SafeAreaView>
    )
}