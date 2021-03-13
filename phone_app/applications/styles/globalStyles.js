import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#1bbb70',
    },
    titleText:{
        //fontFamily:'',
        textAlign: "right",
        marginTop: 20,
        fontSize: 25,
        color:'#333',
        borderColor: '#000',
        borderWidth: 3,
        borderStyle: "dashed",
        borderRadius:10,
        padding: 10,
        paddingRight: 20,
    },
    paragraph:{
        marginVertical:8,
        lineHeight: 20,
    },

});