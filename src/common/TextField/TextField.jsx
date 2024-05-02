import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';


export default function TextField({value,onChange , label, type, disabled}) {
  return (
       <TextInput
       label={label}
       mode='outlined'
       outlineColor='#44357F'
       activeOutlineColor='#44357F'
       value={value}
       onChangeText={onChange}
       style={styles.styl}
       secureTextEntry={type === 'password'}
       disabled={disabled}
    />
  )
}

const styles = StyleSheet.create({
  styl: {
     backgroundColor:'white'
  },
});