import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text ,Alert } from 'react-native'
import { View ,StyleSheet } from "react-native"
import OrderItem from '../OrderItem/OrderItem'
import OrderItemViewModal from '../OrderItemViewModal/OrderItemViewModal'
import TextField from '../../common/TextField/TextField';
import { PaperProvider } from 'react-native-paper';
import ModalOrderItemAssign from '../ModalOrderItemAssign';
import { setupMicrotasks } from 'react-native-reanimated/lib/typescript/reanimated2/threads';
import ModalAssignDetails from '../ModalOrderConfirm';
import instance from '../../services/Axious'
import { useFocusEffect } from '@react-navigation/native'
import PartnerOrderItem from '../PartnerOrderItem'

export default function PartnerOrderList({partnerId,search,onViewClick}) {
 
  const [selectedOrder, setSelectedOrder] = useState({});
  const [orders,setOrders] = useState([]);

  const getAllOrders = async ()=>{

    const res = await instance.post('/user/get_user_info_by_token');
    instance.get(`/payment_details/employee_wise/${res.data.employeeId}`).then(function (response){
        console.log(response.data);
        if(search === 'new'){
            const odrs = response.data.filter(item => item.runner === null && item.order.status != 'complete');
            setOrders(odrs);
        }else if(search === 'ongoing'){
            const odrs = response.data.filter(item => item.runner != null && item.order.status != 'complete');
            setOrders(odrs);
        }else if(search === 'complete'){
            const odrs = response.data.filter(item => item.order.status === 'complete');
            setOrders(odrs);
        }else{
            setOrders(response.data);
         }

    }).catch(function (error){
      console.log(error);
    })
  }


  useFocusEffect(
    React.useCallback(() => {
      getAllOrders();
    }, [])
);

  return (
    <>
        <PaperProvider>

            <View style={{backgroundColor:'#e8e8e8',height:"100%"}}>

                <View style={styles.fieldContainer}>
                    <TextField
                        label={'Search Orders'}
                        //value={}
                        //onChange={}
                    />
                </View>

                <FlatList
                    data={orders}
                    renderItem={({item})=> <PartnerOrderItem 
                            item={item}
                            onViewClick={(val)=>{onViewClick(val,item)}}
                    /> }
                />

            </View>

        </PaperProvider>
    </>
  )
}


const styles = StyleSheet.create({
  titleContainer: {
     marginVertical:15
  },
  title: {
      color: '#44357F',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
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
