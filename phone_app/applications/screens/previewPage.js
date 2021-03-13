import React from 'react';
import { Text, SafeAreaView} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function PreviewPage(){
    return(
        <SafeAreaView style = {globalStyles.container}>
            <Text></Text>
        </SafeAreaView>
    )
}