import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // importing Stack 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // importing Bottom tabs
import { Ionicons } from 'react-native-vector-icons'; // importing React-native-vector-icons

import Home from './home';
//import About from './about';
import Contact from './contact';

import TabHome from './tab-home';
import TabMenu from './tab-menu';
import TabProduct from './tab-product';
import TabUser from './tab-user';
import TabAbout from './tab-about';

import StackNavigator from './StackNavigator';
import AAA from './AA';


export default function App() {
  // const Stack = createStackNavigator() // How to create Stack navigator
  const Tab = createBottomTabNavigator() // How to create Bottom_tab navigator
  return (
      //<ColumnItem/>//
      //<RowItem/>//
     //<Question/>//
     //<ButtonDemo/>//
    //<TouchAbleDemo/>//
    //<FlatListDemo1/>//

<NavigationContainer> 
  <Tab.Navigator tabBarOptions={{ 
    labelStyle: {fontSize: 14}, //ขนาดตัวอักษรบนปุ่ม 
    showLabel: true, //เห็น-ไม่เห็นปุ่ม
    inactiveTintColor: 'gray', //สถานะไม่เลือกให้เป็นสีอะไร สีไอคอนและข้อความ
    activeTintColor: 'blue', //สถานะเลือกแล้วให้เป็นสีอะไร สีไอคอนและข้อความ
  }}> 
    <Tab.Screen name=" " component={TabHome} options={{
      tabBarLabel: 'หน้าแรก', // ข้อความบนปุ่มนี้
      tabBarIcon: ({color, size}) => {
        return <Ionicons name="md-home" size={18} color={color}/>
      }

    }}/> 
    <Tab.Screen name="" component={TabUser} options={{
      tabBarLabel: 'ผู้ใช้', // ข้อความบนปุ่มนี้
      tabBarIcon: ({color, size}) => {
        return <Ionicons name="people" size={24} color={color}/>
      }

    }}/> 
        <Tab.Screen name="About Polar Bear" component={TabAbout} options={{
      tabBarLabel: 'เกี่ยวกับ', // ข้อความบนปุ่มนี้
      tabBarIcon: ({color, size}) => {
        return <Ionicons name="information" size={24} color={color}/>
      }

    }}/> 
     <Tab.Screen name="TabProduct" component={TabProduct} options={{
      tabBarLabel: 'สินค้า', // ข้อความบนปุ่มนี้
      tabBarIcon: ({color, size}) => {
        return <Ionicons name="cart" size={20} color={color}/>
      }

    }}/> 
     <Tab.Screen name="TabMenu" component={TabMenu} options={{
      tabBarLabel: 'รายการ', // ข้อความบนปุ่มนี้
      tabBarIcon: ({color, size}) => {
        return <Ionicons name="menu" size={20} color={color}/>
      }

    }}/> 
  </Tab.Navigator>
</NavigationContainer> // <Tab.Navigator> แสดงผลทุกปุ่มเวลาปรับฟ้อนหรือสี | <Tab.Screen> คือแสดงปุ่มเฉพาะปุ่ม






// ---------------------------------------------[WORK-LAB (Old)]---------------------------------------------------
    
//<NavigationContainer>          //WORKSHOP 
      //<Stack.Navigator initialRouteName='StackNavigator'>
       // <Stack.Screen name="StackNavigator" component={StackNavigator} options={{headerTitle: 'รายการสินค้า' , headerBackTitle:''}}/>
        // <Stack.Screen name="Contact" component={AAA} options={{headerTitle: 'หน้าแรก' , headerBackTitle:' '}}/>
        // </Stack.Navigator>
//</NavigationContainer>

     //<StackNavigator/>
    //<NavigationContainer>      //Stack Navigator Lab
     // <Stack.Navigator initialRouteName='Home'>
        //<Stack.Screen name="Home" component={Home} options={{headerTitle: 'หน้าแรก' , headerBackTitle:' '}}/>
       // <Stack.Screen name="About" component={About} options={{headerTitle: 'เกี่ยวกับ' , headerBackTitle:' '}}/>
       // <Stack.Screen name="Contact" component={Contact} options={{headerTitle: 'ติดต่อ' , headerBackTitle:' '}}/
     // </Stack.Navigator>
   // </NavigationContainer>
           
  );
}

