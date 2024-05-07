import React, { useState,useEffect } from 'react'
import { Text } from 'react-native'
import SenderDetails from '../../component/SenderDetails/SenderDetails';
import RecieverDetails from '../../component/RecieverDetails/RecieverDetails';
import OrderDetails from '../../component/OrderDetails/OrderDetails';

export default function NewOrder() {
    const [align,setAlign] = useState('sender');

    useEffect(() => {
      console.log("dsdsdsdsds");
    }, [])

  return (
    <>
        {
            align === "sender" ? <><SenderDetails onNext={(val)=>{setAlign(val)}}/></> 
            : align === "reciever" ? <><RecieverDetails onNext={(val)=>{setAlign(val)}}/></> 
            : <><OrderDetails onNext={(val)=>{setAlign(val)}}/></>
        }    
    </>
  )
}
