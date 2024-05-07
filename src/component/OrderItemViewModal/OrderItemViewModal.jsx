import * as React from 'react';
import { Text, View } from 'react-native';
import { Modal,Button, Dialog, Portal, PaperProvider } from 'react-native-paper';


export default function OrderItemViewModal({visible = false , onClose,order}) {
  return (
    <Portal>
        <Modal visible={visible} onDismiss={onClose} contentContainerStyle={{backgroundColor: 'white', padding: 20,height:"100%"}}>
            <Text style={{color:'red'}}>Example Modal.  Click outside this area to dismiss.</Text> 
        </Modal>
    </Portal>
  )
}
