import React from 'react'
import { Text } from 'react-native'
import { View ,StyleSheet } from "react-native"
import CommonButton from '../../common/CommonButton/CommonButton';
import {Divider, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RateItem({item}) {
  
    return(
      <>
        <View style={{margin:8,backgroundColor:'#f7f7f7',borderRadius:7,padding:10,elevation:3}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:22,color:'#636363',fontFamily:'Dosis-SemiBold'}}>{ 1 + " " +item.from}</Text>
              <Text style={{fontSize:22,color:'#636363',fontFamily:'Dosis-SemiBold'}}>=</Text>
              <Text style={{fontSize:22,color:'#636363',fontFamily:'Dosis-SemiBold'}}>{ item.rate + " " +item.to}</Text>
          </View>

          <Divider bold={true} style={{backgroundColor:'#c7c7c7',marginVertical:8}}/>
                
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                  <TouchableOpacity >
                     <Text style={styles.text}>Edit</Text>
                  </TouchableOpacity >
                </View>
          
        </View>
      </>
    )
  }

  const styles = StyleSheet.create({
    text: {
      color: '#636363',
      fontSize: 15,
      fontFamily:'Dosis-Regular'
  },
});
