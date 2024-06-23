import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { View ,StyleSheet } from "react-native"
import OrderItemViewModal from '../../component/OrderItemViewModal/OrderItemViewModal';
import ModalOrderItemAssign from '../../component/ModalOrderItemAssign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersListToday from '../../component/OrdersListToday';
import { Button } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import ModalOrderConfirm from '../../component/ModalOrderConfirm';
import PartnerOrderList from '../../component/PartnerOrdersList';
import ModalAssignRunner from '../../component/ModalAssignRunner';
import ModalPartnerOrderDetails from '../../component/ModalPartnerOrderDetails';
import ModalPartnerOrderConfirm from '../../component/ModalPartnerOrderConfirm';

export default function PartnerOrderManage({navigation}) {

  const Tab = createMaterialTopTabNavigator();
  const [assignRunnerVisible, setAssignRunnerVisible] = useState(false);
  const [orderDetailsVisible, setOrderDetailsVisible] = useState(false);
  const [orderConfirmVisible, setOrderConfirmVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const onViewClick = (val,item)=>{
    
    if(val==='view'){
      setSelectedOrder(item)
      setOrderDetailsVisible(true);
    }else if(val==="assign"){
      setSelectedOrder(item)
      setAssignRunnerVisible(true)
    }else{
        setSelectedOrder(item)
        setOrderConfirmVisible(true)
      
    }
}

  // useEffect(()=>{
  //   console.log("runnnn");
  //   return ()=>{};
  // },[])

  // useFocusEffect(()=>{
  //   console.log("runnnn");
  // },[])

  return (
    <>

        <View style={{padding:10,backgroundColor:'#d5f0f5'}}>
            <View style={{marginBottom:2}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('PartnerDashboard')}}>
                  <Ionicons name="return-up-back" size={30} color="black"/>
              </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Orders</Text>
            </View>
        </View>

        <Tab.Navigator>
            <Tab.Screen name="New">
                {props => <PartnerOrderList search={'new'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>

            <Tab.Screen name="Ongoing">
                {props => <PartnerOrderList search={'ongoing'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>
            
            <Tab.Screen name="Complete">
                {props => <PartnerOrderList search={'complete'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>
            <Tab.Screen name="All">
                {props => <PartnerOrderList search={'all'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>

            {/* <Tab.Screen name="All">
                {props => <OrdersListToday search={'all'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen> */}
        </Tab.Navigator>

        {assignRunnerVisible && 
         <ModalAssignRunner
            visible={assignRunnerVisible}
            order={selectedOrder}
            onClose={()=>{setAssignRunnerVisible(false)}}
         />
         }

        {orderDetailsVisible && 
            <ModalPartnerOrderDetails
                visible={orderDetailsVisible}
                order={selectedOrder}
                onClose={()=>{setOrderDetailsVisible(false)}}
            />
        }

        {orderConfirmVisible && 
            <ModalPartnerOrderConfirm
                visible={orderConfirmVisible}
                order={selectedOrder}
                onClose={()=>{setOrderConfirmVisible(false)}}
            />
        }

    </>
  )
}


const styles = StyleSheet.create({
  titleContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  title: {
    color: '#1d86f0',
    fontSize: 26,
    textAlign: 'left',
    fontFamily:'Dosis-Bold'
  },
  fieldName: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
  },
  fieldContainer: {
     margin:10
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
      margin:10
  },
  listSenderName: {
      color: 'white',
      fontSize: 19,
      fontWeight: 'bold',
  },
});
