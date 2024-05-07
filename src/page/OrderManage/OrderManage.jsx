import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { View ,StyleSheet } from "react-native"
import OrderItem from '../../component/OrderItem/OrderItem'
import OrderItemViewModal from '../../component/OrderItemViewModal/OrderItemViewModal';
import TextField from '../../common/TextField/TextField';
import { PaperProvider } from 'react-native-paper';

export default function OrderManage() {
  const [visible, setVisible] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const orderData = [
    {id:'112233',name:'Kamal'},
    {id:'113334',name:'Nimal'},
    {id:'119933',name:'Dumal'},
  ]

  return (
    <>
    <PaperProvider>

    
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Order List</Text>
        </View>

        <View style={styles.fieldContainer}>
            <TextField
                label={'Search Orders'}
                //value={}
                //onChange={}
            />
        </View>

        <SafeAreaView>
          <FlatList
            data={orderData}
            renderItem={({item})=> <OrderItem order={item} onViewClick={()=>{
              setSelectedOrder(item)
              setVisible(true)
            }}/>}
          />
        </SafeAreaView>
        {visible && 
         <OrderItemViewModal
            visible={visible}
            order={selectedOrder}
            onClose={()=>{setVisible(false)}}
         />
         }

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
