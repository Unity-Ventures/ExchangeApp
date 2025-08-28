import React from 'react'
import { Text } from 'react-native'
import { View ,StyleSheet } from "react-native"
import CommonButton from '../../common/CommonButton/CommonButton';
import {Divider, Button } from 'react-native-paper';

export default function AsssignOrdersListItem({item,onViewClick}) {
  
    return(
      <>
        <View style={{margin:8,backgroundColor:'#44357F',borderRadius:7,padding:8}}>
          <Text style={{fontSize:20,color:'white',marginBottom:14}}>Assign Item</Text>
          <Text style={styles.text}>Ccountry</Text>
          
          <Divider bold={true} style={{backgroundColor:'white',marginVertical:8}}/>

          <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10}}>
            
            <View style={{flexDirection:'column' ,gap:10}}>
                <Button
                    mode="contained"
                    buttonColor={'black'}
                    textColor={'white'}
                    //onPress={onViewClick}
                    //style={{width:80}}
                >
                    View
                </Button>
                <Button
                    mode="contained"
                    buttonColor={'black'}
                    textColor={'white'}
                    //onPress={onViewClick}
                    //style={{width:80}}
                >
                    Assign to runner
                </Button>

                <Button
                    mode="contained"
                    buttonColor={'black'}
                    textColor={'white'}
                    //onPress={onViewClick}
                    //style={{width:80}}
                >
                    complt and update recipt
                </Button>

                
            </View>
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
