import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';


export default function TextField({value,onChange , label, type, disabled}) {
  return (
       <TextInput
       label={label}
       mode='outlined'
       outlineColor='#e1e4e6'
       activeOutlineColor='#bbbcbd'
       value={value}
       onChangeText={onChange}
       style={styles.styl}
       secureTextEntry={type === 'password'}
       disabled={disabled}
       textColor='gray'
       contentStyle={{fontFamily:'Dosis-Regular',fontSize:16}}
       outlineStyle={{borderRadius:7}}
       
    />
  )
}

const styles = StyleSheet.create({
  styl: {
     backgroundColor:'white',
     height: 45,
  },
});