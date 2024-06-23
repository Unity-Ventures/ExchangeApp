import React from 'react'
import { Text,TouchableOpacity } from 'react-native'
import { View ,StyleSheet } from "react-native"
import CommonButton from '../../common/CommonButton/CommonButton';
import {Divider, Button } from 'react-native-paper';

export default function PartnerOrderItem({order,onViewClick}) {
  
    return(
      <><TouchableOpacity onPress={()=>{onViewClick('view')}}>

      
        <View style={{margin:8,backgroundColor:'#f7f7f7',borderRadius:7,padding:8,elevation:3}}>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:18,color:'#636363',fontFamily:'Dosis-SemiBold'}}>Ref No : {order.referenceNo}</Text>
            <Text style={styles.text}>{order.date}</Text>
            {/* <Text style={{fontSize:14,color:'#636363',fontWeight:'bold'}}>{order.confirmStatus === "yes" ? "Confirm" : "NotConfirm"}</Text> */}
            
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <View>
                <Text style={styles.text}>Account Name</Text>
                {/* {order.account?.customer.firstName} */}
                <Text style={styles.text}>USD 2500</Text>
                {/* {order.receiveCurrency + "  " + order.receiveAmount} */}
            </View>
            <View>
                <Text style={styles.text}>Bank Name</Text>
                <Text style={styles.text}>Account No</Text>
            </View>
          </View>

          <Divider bold={true} style={{backgroundColor:'#c7c7c7',marginBottom:8}}/>
         
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
              <View>
                  <Text style={{fontSize:14,color:'#636363',fontFamily:'Dosis-SemiBold'}}>Assign To : Runner</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{onViewClick('view')}}>
                  <Text style={{fontSize:14,color:'#4499c7',fontFamily:'Dosis-SemiBold'}}>Details   |</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  onViewClick('assign')
                  }}>
                  <Text style={{fontSize:14,color:'#4499c7',fontFamily:'Dosis-SemiBold'}}>   {order.status === "pending" ? "Assign"  : ""}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  onViewClick('confirm')
                  }}>
                  <Text style={{fontSize:14,color:'#4499c7',fontFamily:'Dosis-SemiBold'}}>   {order.status === "complete" ? "" : "Confirm"}</Text>
                </TouchableOpacity>
              </View>
        
          </View>
        </View>
        </TouchableOpacity></>
    )
  }

  const styles = StyleSheet.create({
    text: {
        color: '#636363',
        fontSize: 17,
        fontFamily:'Dosis-Regular'
    },
});
