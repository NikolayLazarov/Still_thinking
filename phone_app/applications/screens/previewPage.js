import React from 'react';
import { Text} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function PreviewPage(){
    return(
        <SafeAreaView style = {globalStyles.container}>
            <Text>Preview Screen</Text>
        </SafeAreaView>
    )
}