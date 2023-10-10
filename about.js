import React from "react";
import { StyleSheet, View, Text, Button } from "react-native"; 
import globalStyles from "./global-styles";


export default function About({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
            <Button title="Go to Contact" onPress={() => navigation.navigate("Contact")}/>
        </View>
    )
}