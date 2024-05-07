import React from 'react'
import { Text } from 'react-native'
import { View ,StyleSheet } from "react-native"
import CommonButton from '../../common/CommonButton/CommonButton';
import {Divider, Button } from 'react-native-paper';

export default function OrderItem({order,onViewClick}) {
  
    return(
      <>
        <View style={{margin:8,backgroundColor:'#44357F',borderRadius:7,padding:8}}>
          <Text style={{fontSize:20,color:'white',marginBottom:14}}>Refference No : {order.id}</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <Text style={styles.text}>Gunadasa Kapuge</Text>
            <Text style={styles.text}>21-04-2024</Text>
            
          </View>

          <Divider bold={true} style={{backgroundColor:'white',marginBottom:8}}/>
         
          <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Button
            
              mode="contained"
              buttonColor={'black'}
              textColor={'white'}
              onPress={onViewClick}
              //style={{width:80}}
            >
              View
            </Button>

            <Button
            
              mode="contained"
              buttonColor={'black'}
              textColor={'white'}
              onPress={onViewClick}
              style={{marginLeft:10}}
              //style={{width:125,marginLeft:10}}
            >
              Assign
            </Button>
          </View>
        </View>
      </>
    )
  }

  const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
    },
});
