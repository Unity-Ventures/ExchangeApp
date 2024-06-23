import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView,View ,StyleSheet } from "react-native"
import { PaperProvider, Text, TextInput } from "react-native-paper"
import TextField from '../../common/TextField/TextField';
import CommonButton from '../../common/CommonButton/CommonButton';
import { Icon ,MD3Colors  } from 'react-native-paper';
import BPListItem from '../../component/BPListItem';
import ModalBusinessPartView from '../../component/ModalBusinessPartView';
import { createStackNavigator } from '@react-navigation/stack';
import BPList from '../../component/BPList';
import BPView from '../../component/BPView';

export default function BPManage() {

    const Stack = createStackNavigator();

    const [partner,setPartner] = useState({});

  return (
    <>
        <Stack.Navigator>
            <Stack.Screen name="BPList" options={{ headerShown: false }}>
                {props => <BPList setPartner={(item)=>{setPartner(item)}}/>}
            </Stack.Screen>
           
            <Stack.Screen name="BPView" options={{ headerShown: false }}>
                {props => <BPView partner={partner}/>}
            </Stack.Screen>
        </Stack.Navigator>               
    </>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
       margin:15
    },
    title: {
        color: '#505152',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    fieldName: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    fieldContainer: {
       marginHorizontal:8
    },
    btn: {
        borderRadius: 7,
        width: 125,
        height:50,
        fontSize: 18,
        textAlign:'center',
        justifyContent:'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'flex-end',
        marginHorizontal:10
    },
    listSenderName: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
    },
});
