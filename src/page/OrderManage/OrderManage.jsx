import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { View ,StyleSheet } from "react-native"
import OrderItemViewModal from '../../component/OrderItemViewModal/OrderItemViewModal';
import ModalOrderItemAssign from '../../component/ModalOrderItemAssign';
import ModalAssignDetails from '../../component/ModalOrderAssignedDetils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersListToday from '../../component/OrdersListToday';
import { Button } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

export default function OrderManage({navigation}) {

  const Tab = createMaterialTopTabNavigator();
  const [visible, setVisible] = React.useState(false);
  const [assignModalVisible,setAssignModalVisible] = useState(false);
  const [assignDetailsVisible,setAssignDetailsVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const onViewClick = (val,item)=>{
      if(val==='view'){
        setVisible(true)
        setSelectedOrder(item)
      }else if(val==="asign"){
        setAssignModalVisible(true)
        setSelectedOrder(item)
      }else{
        console.log(val);
        setAssignDetailsVisible(true)
        setSelectedOrder(item)
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
              <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}}>
                  <Ionicons name="return-up-back" size={30} color="black"/>
              </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                    <Text style={styles.title}>ORDERS</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('New Transaction')}}>
                        <AntDesign name="plus" size={30} color="black"/> 
                    </TouchableOpacity>
                </View>

            {/* <Text style={styles.title}>Orders</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('New Transaction')}}>
              <Text style={styles.title}>+</Text>
            </TouchableOpacity> */}
        </View>
        <Tab.Navigator>
            <Tab.Screen name="NEW">
                {props => <OrdersListToday search={'new'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>
            
            <Tab.Screen name="Ongoing">
                {props => <OrdersListToday search={'ongoing'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>
            <Tab.Screen name="Complete">
                {props => <OrdersListToday search={'complete'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>
            <Tab.Screen name="All">
                {props => <OrdersListToday search={'all'} onViewClick={(val,item)=>{onViewClick(val,item)}}/>}
            </Tab.Screen>
        </Tab.Navigator>

        {visible && 
         <OrderItemViewModal
            visible={visible}
            order={selectedOrder}
            onClose={()=>{setVisible(false)}}
         />
         }

         {assignModalVisible &&
            <ModalOrderItemAssign
              visible={assignModalVisible}
              item={selectedOrder}
              onClose={()=>setAssignModalVisible(false)}
            />

         }

         {assignDetailsVisible && 
           <ModalAssignDetails
            visible={assignDetailsVisible}
            onClose={()=>{setAssignDetailsVisible(false)}}
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
