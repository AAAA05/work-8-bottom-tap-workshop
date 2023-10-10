import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import globalStyles from "./global-styles";

export default function TabUser({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize:80, marginBottom: 10,}}>Profile</Text>

            <Image source={require('./wt.jpg')} style={styles.imgicon}/>

            <Text style={styles.text}> 
            Name : Winter
            </Text>

            <Text style={styles.text}> 
            Birth Name :  Kim Min Jeong (김민정)
            </Text>

            <Text style={styles.text}>
            Age : 23
            </Text>

            <Text style={styles.text}> 
            Zodiac Sign : Capricorn
            </Text>

            <Text style={styles.text}> 
            Nationality : Korean
            </Text>

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
        color: 'black',

    },
    imgicon: {
      width: 250,
      height: 250,
      marginBottom: 20,
    }
})