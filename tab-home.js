import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";


export default function TabHome({navigation}){
    return(
        <View style={styles.container}>

            <Text style={{fontSize:100, fontWeight: 'bold',}}>Polar</Text>
            <Text style={{fontSize:100, fontWeight: 'bold', color:'white',}}>Bear</Text>
            <Text style={{fontSize:13, fontWeight: 'bold', color:'white'}}>This article is about the animal. For other uses, see Polar bear</Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent} 
            style={{alignItems: 'center'}} horizontal={false}>

            <Image source={require('./pb.jpg')} style={styles.imgicon}/>

            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'silver',
    },
    scrollViewContent: {
        margin: 5,
        padding: 20,

    },
    text: {
        fontSize: 16,
        fontStyle: 'italic',
        color: 'white',
    },
    imgicon: {
      width: 362,
      height: 418,
    }
})