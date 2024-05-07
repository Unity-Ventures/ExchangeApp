import React, { useState } from 'react'
import { View ,StyleSheet } from "react-native"
import { PaperProvider, Text } from "react-native-paper"
import TextField from '../../common/TextField/TextField'
import CommonButton from '../../common/CommonButton/CommonButton'

export default function RecieverDetails({onNext}) {

    const [reciverList , setRecieverList] = useState([{name: "Prasad Indika" , ContactNo:"0777939393"},{name: "Dilusha Dishani" , ContactNo:"0777939393"},{name: "Prasad Indika" , ContactNo:"0777939393"}]);
    const [isNew , setIsNew] = useState(false)

    
  return (
    <>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Reciever Details</Text>
            < CommonButton
                style={styles.btn}
                label={isNew? 'Search' : 'New'}
                onPress={()=>{
                    if(isNew){
                        setIsNew(false)
                    }else{
                        setIsNew(true)
                    }
                }}
            />
        </View>

        {isNew? 
            <>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>First Name *</Text>
                    <TextField
                        //value={}
                        //onChange={}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Last Name *</Text>
                    <TextField
                        //value={}
                        //onChange={}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>NIC *</Text>
                    <TextField
                        //value={}
                        //onChange={}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Contact No *</Text>
                    <TextField
                        //value={}
                        //onChange={}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Address *</Text>
                    <TextField
                        //value={}
                        //onChange={}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Bank Account *</Text>
                    <TextField
                        //value={}
                        //onChange={}
                    />
                </View>
            </>
            :
            <>
                    <View style={styles.fieldContainer}>
                        <TextField
                            label={'Search Reciever'}
                            //value={}
                            //onChange={}
                        />
                    </View>

                    {reciverList.map((val)=>(
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
        }

        <View style={styles.buttonContainer}>
            < CommonButton
                style={styles.btn}
                label={'Back'}
                onPress={()=>{onNext("sender")}}
            />

            < CommonButton
                style={styles.btn}
                label={'Next'}
                onPress={()=>{onNext("order")}}
            />
        </View>     
    </>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection:'row',
        justifyContent:'space-between',     
        margin:15
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
        justifyContent:'space-around',
        margin:10
    },
});