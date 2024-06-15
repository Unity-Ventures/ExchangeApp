import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { View ,StyleSheet } from "react-native"
import OrderItem from '../OrderItem/OrderItem'
import OrderItemViewModal from '../OrderItemViewModal/OrderItemViewModal'
import TextField from '../../common/TextField/TextField';
import { PaperProvider } from 'react-native-paper';
import ModalOrderItemAssign from '../ModalOrderItemAssign';
import { setupMicrotasks } from 'react-native-reanimated/lib/typescript/reanimated2/threads';
import ModalAssignDetails from '../ModalOrderAssignedDetils';
import instance from '../../services/Axious'
import { useFocusEffect } from '@react-navigation/native'

export default function OrdersListToday({search,onViewClick}) {
  const [visible, setVisible] = React.useState(false);
  const [assignModalVisible,setAssignModalVisible] = useState(false);
  const [assignDetailsVisible,setAssignDetailsVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const [orders,setOrders] = useState([]);

  const getAllOrders = ()=>{
    instance.get('/order').then(function (response){
      if(search === 'new'){
        const odrs = response.data.filter(order => order.status === 'pending');
        setOrders(odrs);
      }else if(search === 'ongoing'){
        const odrs = response.data.filter(order => order.status === 'assign');
        setOrders(odrs);
      }else if(search === 'complete'){
        const odrs = response.data.filter(order => order.status === 'complete');
        setOrders(odrs);
      }else{
        setOrders(response.data);
      }
    }).catch(function (error){
      console.log(error);
    })
  }

 
  // useEffect(()=>{
  //  getAllOrders();
  // },[])
  
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

                <SafeAreaView>
                    <FlatList
                        data={orders}
                        renderItem={({item})=> 
                            <OrderItem 
                                order={item} 
                                onViewClick={(val)=>{
                                    onViewClick(val,item)  
                                }}
                            />}
                    />
                </SafeAreaView>
                </View>
                {/* {visible && 
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
         } */}

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
