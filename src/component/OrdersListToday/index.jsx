import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text ,Alert } from 'react-native'
import { View ,StyleSheet } from "react-native"
import OrderItem from '../OrderItem/OrderItem'
import TextField from '../../common/TextField/TextField';
import { PaperProvider } from 'react-native-paper';
import instance from '../../services/Axious'
import { useFocusEffect } from '@react-navigation/native'

export default function OrdersListToday({search,onViewClick}) {

  const [orders,setOrders] = useState([]);
  const [ordersSerch,setOrdersSerch] = useState([])

  const getAllOrders = ()=>{
    instance.get('/order').then(function (response){
      if(search === 'new'){
        const odrs = response.data.filter(order => order.status === 'pending');
        setOrders(odrs);
        setOrdersSerch(odrs);
      }else if(search === 'ongoing'){
        const odrs = response.data.filter(order => order.status === 'assign');
        setOrders(odrs);
        setOrdersSerch(odrs);
      }else if(search === 'complete'){
        const odrs = response.data.filter(order => order.status === 'complete');
        setOrders(odrs);
        setOrdersSerch(odrs);
      }else{
        setOrders(response.data);
        setOrdersSerch(response.data);
      }
    }).catch(function (error){
      console.log(error);
    })
  }

  function searchOrders(orders, searchString) {
    function searchInObject(obj, searchString) {
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          if (searchInObject(obj[key], searchString)) {
            return true;
          }
        } else {
          if (String(obj[key]).toLowerCase().includes(searchString.toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    }
  
    return orders.filter(order => searchInObject(order, searchString));
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
                        onChange={(val)=>{
                          const matchedOrders = searchOrders(ordersSerch, val);
                          setOrders(matchedOrders);
                      }}
                    />
                </View>

                <SafeAreaView>
                    <FlatList
                        data={orders}
                        renderItem={({item})=> 
                            <OrderItem 
                                order={item} 
                                onViewClick={(val)=>{
                                    if(val === 'confirm'){


                                      Alert.alert('Order Complete', 'Are you Sure to confirm the completion of order', [
                                        {
                                          text: 'Cancel',
                                          onPress: () => console.log('Cancel Pressed'),
                                          style: 'cancel',
                                        },
                                        {text: 'Yes', onPress: () => {
                                          instance.put(`/order/updateState/${item.orderId}`,{status:'complete'})
                                                  .then(function (res){console.log("Succ");})
                                                  .catch(function (err){console.log(err);})
                                        }},
                                      ]);



                                    }else{
                                      onViewClick(val,item)
                                    }
                                      
                                }}
                            />}
                    />
                </SafeAreaView>
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
