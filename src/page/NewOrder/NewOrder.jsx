import React, { useState } from 'react'
import { Text } from 'react-native'

export default function NewOrder() {
    const [align,setAlign] = useState('sender');
  return (
    <>
        {
            align === "sender" ? <><Text>Sender</Text></> 
            : align === "reciever" ? <><Text>Reci</Text></> 
            : <><Text>Order</Text></>
        }    
    </>
  )
}
