import React from 'react'
import { View ,StyleSheet } from "react-native"
import { PaperProvider, Text } from "react-native-paper"
import TextField from '../../common/TextField/TextField'
import CommonButton from '../../common/CommonButton/CommonButton'

export default function OrderDetails({onNext}) {
  return (
    <>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Order Details</Text>
        </View>

        <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>First Name *</Text>
            <TextField
                //value={}
                //onChange={}
            />
        </View>

        <View style={styles.buttonContainer}>
            < CommonButton
                style={styles.btn}
                label={'Back'}
                onPress={()=>{onNext("reciever")}}
            />

            < CommonButton
                style={styles.btn}
                label={'Place Order'}
                onPress={()=>{}}
            />
    </View>    
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
        justifyContent:'space-around',
        margin:10
    },
});