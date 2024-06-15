import React from 'react'
import { Text } from 'react-native'
import { View ,StyleSheet } from "react-native"
import CommonButton from '../../common/CommonButton/CommonButton';
import {Divider, Button } from 'react-native-paper';

export default function RunnerListItem({item,onViewClick}) {
  
    return(
      <>
        <View style={{margin:8,backgroundColor:'#44357F',borderRadius:7,padding:8}}>
          <Text style={{fontSize:20,color:'white',marginBottom:14}}>Runner Name</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <Text style={styles.text}>Ccountry</Text>
            <View style={{flexDirection:'row'}}>
                <Button
                    mode="contained"
                    buttonColor={'black'}
                    textColor={'white'}
                    onPress={onViewClick}
                    //style={{width:80}}
                >
                    add
                </Button>

                <Text>Edit</Text>
            </View>
        </View>

        <Divider bold={true} style={{backgroundColor:'white',marginBottom:8}}/>
         
          
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
