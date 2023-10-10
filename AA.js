import React from "react";
import { StyleSheet, View, Text, Button } from "react-native"; 
import globalStyles from "./global-styles";


export default function AAA({route, navigation}){
  let name = route.params.name || ''

  return(
    <View>
    <Text>{name}</Text>
    </View>
  )
}