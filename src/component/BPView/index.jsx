import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersListToday from '../OrdersListToday';
import Icon from 'react-native-vector-icons/Octicons'


export default function BPView({navigation}) {

    const Tab = createMaterialTopTabNavigator();

  return (
    <>
        <View style={{margin:10,marginBottom:30,display:'flex',flexDirection:'row'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity>
                    <Icon name="person" size={40} color="black"/> 
                </TouchableOpacity>
            </View>
            <View style={{flex:6}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,color:'black'}}>Prasad Indika</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BPList')}}>
                        <Icon name="x" size={26} color="black"/> 
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:12,color:'black'}}>0770826701</Text>
                <Text style={{fontSize:12,color:'black'}}>Canada</Text>
            </View>
        </View>
       <Tab.Navigator>
            {/* <Tab.Screen name='Profile' >
                {props => <OrdersListToday/>}
            </Tab.Screen> */}
            <Tab.Screen name='Ongoing Tran.' >
                {props => <></>}
            </Tab.Screen>
            <Tab.Screen name='Trans History' >
                {props => <></>}
            </Tab.Screen>
            <Tab.Screen name='Runners' >
                {props => <></>}
            </Tab.Screen>
        </Tab.Navigator>
    </>
  )
}
