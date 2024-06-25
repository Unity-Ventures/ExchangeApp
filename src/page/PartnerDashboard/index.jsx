import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import TextField from '../../common/TextField/TextField'
import { Divider } from 'react-native-paper'
import OrderItem from '../../component/OrderItem/OrderItem'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BackHandler,Alert } from 'react-native';
import { removeData } from '../../utils/storage/Storage'
import { CommonActions } from '@react-navigation/native'
import instance from '../../services/Axious'

export default function PartnerDashboard({navigation}) {

    const [userName,setUserName] = useState('');

    const handleLogout = () => {

        removeData("token");
        removeData("role");
    
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
    }

    function getUserInfo(){
        instance.post('/user/get_user_info_by_token')
                .then(function (response){
                    setUserName(response.data.fistName)
                    console.log(response.data);
                })
    }

    function getTimeOfDay() {

        const now = new Date();
        const hour = now.getHours();

        if (hour >= 3 && hour < 12) {
            return 'Good Morning';
          } else if (hour >= 12 && hour < 17) {
            return 'Good Afternoon';
          } else if (hour >= 17 && hour < 21) {
            return 'Good Evening';
          } else {
            return 'Good Night';
          }
    }


    

    const orderData = [
        {id:'112233',name:'Kamal',confirmStatus:"not"},
        {id:'113334',name:'Nimal',confirmStatus:"yes"},

      ]

      const handleGoBack = ()=>{
        Alert.alert("Stop","Are You Sure",[{text:"cancel",onPress:()=>null,style:'cancel'},{text:'Yes',onPress:()=>{BackHandler.exitApp()}}]);
        return true;
    }

      useEffect(()=>{
        const backHandler = BackHandler.addEventListener("hardwareBackPress",handleGoBack);
        getUserInfo();
      },[])

  return (
    <View style={{flex:1,backgroundColor:'#d5f0f5',padding:10}}>
        

        <View style={{flexDirection:'row',padding:4,marginTop:10}}>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <Ionicons name="person-circle-outline" size={38} color="black" />
            </View>
            <View style={{flex:6}}> 
                <Text style={{color:'black',fontSize:16,fontFamily:"Dosis-Regular"}}>{getTimeOfDay()}</Text>
                <Text style={{color:'#1d86f0',fontSize:22,fontFamily:"Dosis-Bold"}}>{userName?.toUpperCase()}</Text>
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <Ionicons name="notifications" size={25} color="black" />
            </View>
        </View>

        <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:7,padding:6,marginTop:15}}>
            <View style={{flex:6}}> 
                <Text style={{color:'black',fontSize:16,fontFamily:"Dosis-Regular"}}>Total Transaction</Text>
                <Text style={{color:'black',fontSize:22,fontFamily:"Dosis-Bold"}}> USD 25,400.00</Text>
            </View>
            <View style={{flex:1}}>
                <Icon name="long-arrow-right" size={30} color="black" />
            </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'white',borderRadius:7,paddingVertical:12,marginTop:15}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('PartnerOrders')}}>
                <View style={{width:75,height:90,borderWidth:1,borderRadius:5,borderColor:'#c8cacc',alignItems:'center',justifyContent:'space-around'}}>
                    <View>
                        <Icon name="exchange" size={30} color="black" />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:16,fontFamily:"Dosis-SemiBold"}}>Orders</Text>
                    </View>
                
                </View>
            </TouchableOpacity>
            
            {/* <TouchableOpacity onPress={()=>{navigation.navigate('PartnerOrders')}}>
                <View style={{width:75,height:90,borderWidth:1,borderRadius:5,borderColor:'#c8cacc',alignItems:'center',justifyContent:'space-around'}}>
                    <View>
                        <Icon1 name="addusergroup" size={30} color="black" />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:15,fontFamily:"Dosis-SemiBold"}}>Currency</Text>
                    </View>
                
                </View>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={()=>{navigation.navigate('Runner')}}>
                <View style={{width:75,height:90,borderWidth:1,borderRadius:5,borderColor:'#c8cacc',alignItems:'center',justifyContent:'space-around'}}>
                    <View>
                        <Icon name="dollar" size={30} color="black" />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:15,fontFamily:"Dosis-SemiBold"}}>Runner</Text>
                    </View>
                
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
                <View style={{width:75,height:90,borderWidth:1,borderRadius:5,borderColor:'#c8cacc',alignItems:'center',justifyContent:'space-around'}}>
                    <View>
                        <Icon2 name="more-horizontal" size={30} color="black" />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:16,fontFamily:"Dosis-SemiBold"}}>Logout</Text>
                    </View>
                
                </View>
            </TouchableOpacity>
        </View>

        <View style={{flex:1,flexDirection:'column',backgroundColor:'white',borderRadius:7,padding:4,marginTop:15}}>
            <View style={{}}> 
                <TextField
                    label={'Search'}
                    //value={}
                    //onChange={}
                />
                <View style={{marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>

                    <TouchableOpacity>
                        <View style={{borderWidth:1,width:100,paddingVertical:6,borderRadius:20,alignItems:'center'}}>
                            <Text style={{color:'black',fontSize:16,fontFamily:'Dosis-SemiBold'}}>Ongoing</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{borderWidth:1,width:100,paddingVertical:6,borderRadius:20,alignItems:'center'}}>
                            <Text style={{color:'black',fontSize:16,fontFamily:'Dosis-SemiBold'}}>Completed</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Divider style={{marginTop:10}}/>

                <ScrollView>
                    {orderData.map((item)=>(
                        <>
                        </>
                    ))}
                </ScrollView>

            </View>
        </View>
        
    </View>

  )
}


