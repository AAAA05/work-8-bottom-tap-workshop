import React from "react";
import { StyleSheet, View, Text, Button } from "react-native"; 
import globalStyles from "./global-styles";


export default function Home({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.font}>Home Screen</Text>
            <Button title="Go to About" onPress={() => navigation.navigate("About")}/>

            <Button title="ข้อมูลนักศึกษาคนที่ 1" onPress={() => navigation.navigate("Contact", {
                id: 123456789,                      //number
                name: 'Likit chamuthai',            //string
                married: true,                      //boolean
                phone:['0812345678','00000000'],    //array
                education: {                        //object
                    bachelorsDegree: 'Esport',
                    mastersDegree: 'ProPlayer'

                },
            })}/>
        </View>
    )
}