import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View ,StyleSheet } from "react-native"
import CommonButton from '../../common/CommonButton/CommonButton';
import {Divider, Button } from 'react-native-paper';

export default function RunnerListItem({item,onViewClick}) {
  
    return(
      <><TouchableOpacity onPress={onViewClick}> 

      
        <View style={{margin:8,backgroundColor:'#f7f7f7',borderRadius:7,padding:10,elevation:3}}>
          <Text style={styles.text2}>Runner Name</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <Text style={styles.text}>Ccountry</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>0777644582</Text>
            </View>
        </View>

        <Divider bold={true} style={{backgroundColor:'white',marginBottom:8}}/>
         
          
        </View>
        </TouchableOpacity></>
    )
  }

  const styles = StyleSheet.create({
    text2: {
      color: '#636363',
      fontSize: 18,
      fontFamily:'Dosis-Bold'
  },
    text: {
      color: '#636363',
      fontSize: 15,
      fontFamily:'Dosis-Regular'
  },
});
