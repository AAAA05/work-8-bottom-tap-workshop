import React from "react";
import { View, Text } from "react-native";
import globalStyles from "./global-styles";

export default function TabMenu({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize:18}}>Menu</Text>
        </View>
    )
}
