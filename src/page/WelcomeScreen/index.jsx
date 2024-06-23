import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { getData } from '../../utils/storage/Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackHandler,Alert } from 'react-native';

export default function WelcomeScreen({navigation}) {

    // const [token,setToken] = useState(getData('abd'));

    const [isGo,setIsGo] = useState(true);


    const handleGetToken = async () => {
        const token = await getData('token');
        const role = await getData('role');
        console.log(token);
        setTimeout(()=>{
            if(token){
                if(role === 'Admin'){
                    navigation.navigate("Drawer")
                }else if(role === 'Partner'){
                    navigation.navigate('BPartner');
                }else{
                    navigation.navigate("Login")
                }
            }else{
                navigation.navigate("Login")
            }
        },2000)
    }

    useEffect(()=>{
        handleGetToken();
    },[])

  return (
    <View>
        <Text style={{color:'red',fontSize:40}}> Welcome</Text>
    </View>
  )
}
