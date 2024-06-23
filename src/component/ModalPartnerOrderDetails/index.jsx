import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Modal,Button, Dialog, Portal, PaperProvider,Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ModalPartnerOrderDetails({visible = false , onClose,order}) {

    React.useEffect(()=>{
        console.log(order);
    },[])

    
  return (
    <Portal>
        <Modal visible={visible} onDismiss={onClose} contentContainerStyle={{backgroundColor: 'white', padding: 10,height:"100%"}}>
            
            <View style={{height:"100%"}}>

                <View style={{marginVertical:12}}>
                    <TouchableOpacity onPress={onClose}>
                        <Ionicons name="return-up-back" size={30} color="black"/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                    <Text style={styles.mainText}>{"Ref No" + "  " + order.referenceNo }</Text>
                    <Text style={styles.middleText}> {order.status === 'complete' ? "Completed" : 'Pending'} </Text>
                </View>

                <Divider bold={true} style={{marginTop:8,backgroundColor:'#c7c7c7',marginBottom:8}}/>

                <View style={{flexDirection:'row',justifyContent:''}}>
                    <View style={{flex:1}}>
                        <View>
                            <Text style={styles.text}>Order on  </Text>
                            <Text style={styles.text}>2024-04-25  </Text>
                        </View>
                        <View style={{marginTop:3}}>
                            <Text style={styles.text}>Completed on  </Text>
                            <Text style={styles.text}>date  </Text>
                        </View>
                        
                    </View>

                    <View style={{flex:1,flexDirection:'column',alignItems:'flex-end'}}>
                        <View>
                            <Text style={styles.text}>Send Amount     </Text>
                            <Text style={styles.text}>1000</Text>
                        </View>
                        <View style={{marginTop:3}}>
                            <Text style={styles.text}>Receive Amount</Text>
                            <Text style={styles.text}>1000</Text>
                        </View>
                    </View>
                </View>

                <Divider bold={true} style={{marginVertical:15,backgroundColor:'#c7c7c7'}}/>


                <View style={{borderRadius:6,backgroundColor:'#ededed',padding:6,marginTop:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                        <Text style={styles.middleText}>Account Details</Text>
                        <Text style={styles.middleText}>Full Name </Text>
                    </View>

                    <Divider bold={true} style={{marginTop:2,backgroundColor:'#c7c7c7',marginBottom:8}}/>

                    <View style={{margin:6}}>
                        <Text style={styles.text}>address Contry </Text>
                    </View>
                    <View style={{margin:6,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.text}>Contact  </Text>
                        <Text style={styles.text}>Nic </Text>
                    </View>
                    <View style={{margin:6}}>
                        <Text style={styles.text}>Account Name </Text>
                    </View>
                    <View style={{margin:6,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.text}>Bank Name </Text>
                        <Text style={styles.text}>Account No </Text>
                    </View>
                    

                </View>

                <View style={{backgroundColor:'#ededed',padding:6,marginTop:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                        <Text style={styles.middleText}>Runner</Text>
                    </View>

                    <Divider bold={true} style={{marginTop:2,backgroundColor:'#c7c7c7',marginBottom:8}}/>

                    <View style={{margin:5}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                            <Text style={styles.text}>Runner name</Text>
                            <Text style={styles.text}>Done </Text>
                        </View>
                       
                    </View>
                </View>
                
            </View>
            
            
            
            
            
            
             
        </Modal>
    </Portal>
  )
}


const styles = StyleSheet.create({
    text: {
        color: '#70706e',
        fontSize: 16,
        fontFamily:"Dosis-Regular"
    },
    mainText: {
        color: '#2e2e2d',
        fontSize: 23,
        fontFamily:"Dosis-Bold"
    },
    middleText: {
        color: '#474747',
        fontSize: 20,
        fontFamily:"Dosis-Regular"
    },
});