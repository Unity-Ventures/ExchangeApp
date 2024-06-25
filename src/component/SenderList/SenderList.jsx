import React, { useEffect, useState } from 'react'
import { View ,StyleSheet } from "react-native"
import { PaperProvider, Text, TextInput } from "react-native-paper"
import TextField from '../../common/TextField/TextField';
import CommonButton from '../../common/CommonButton/CommonButton';
import { Icon ,MD3Colors  } from 'react-native-paper';

export default function SenderList({navigation}) {
    const [senderList , setSenderList] = useState([{name: "Prasad" , ContactNo:"0777939393"},{name: "Dilusha Dishani" , ContactNo:"0777939393"},{name: "Prasad Indika" , ContactNo:"0777939393"}]);
    
    useEffect(() => {
        console.log("lollll");
      }, [])
    

  return (
    <>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Sender List</Text>
        </View>

        <View style={styles.fieldContainer}>
            <TextField
                label={'Search Sender'}
                //value={}
                //onChange={}
            />
        </View>

        <View style={styles.buttonContainer}>
            < CommonButton
                style={styles.btn}
                label={'Add'}
                onPress={()=>{navigation.navigate('AddSender')}}
            />
        </View>

        {senderList.map((val)=>(
            <View style={{margin:10,backgroundColor:'#44357F',padding:3,borderRadius:7}}>
                <Text style={styles.listSenderName}>{val.name}</Text>
                <View style={{justifyContent:'space-between'}}>
                    <View>
                        <Text style={styles.listSenderName}>0777-576894</Text>
                    </View>
                    <View>
                        {/* <Icon
                         source="delete"
                            color={MD3Colors.error50}
                            size={20}
                        /> */}
                    </View>

                 </View>
            </View>
        ))}

        
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
