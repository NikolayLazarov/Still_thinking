import React from 'react';
import { SafeAreaView,
        View,
        Text,
        StatusBar,
        Platform,

 } from 'react-native';

function Background(props) {
    return (
            <View style = {styles.header}>
                {/*name of project*/ }
                <Text style = {{
                    fontSize: 50,
                    fontWeight: "bold",
                    justifyContent: "center",
                    color: "white",
                }
                }>The name is.</Text>
     </View>
    );
}

const styles = StyleSheet.create( {
  /* 
  container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "100%",
        height: "10%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
      */
      header: {
        flex: 0.1,
      backgroundColor: '#00ff80',
      },
})

export default Background;