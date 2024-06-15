import * as React from 'react';
import { Text, View } from 'react-native';
import { Modal,Button, Dialog, Portal, PaperProvider,Divider } from 'react-native-paper';


export default function OrderItemViewModal({visible = false , onClose,order}) {
  return (
    <Portal>
        <Modal visible={visible} onDismiss={onClose} contentContainerStyle={{backgroundColor: 'white', padding: 10,height:"100%"}}>
            
            <View style={{height:"100%"}}>

                <View style={{marginVertical:12}}>
                  <Text style={{fontSize:15, color:"black"}}> Back </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                    <Text style={{fontSize:22.5, color:"black",fontWeight:'bold'}}>REF NO  - 10023454 </Text>
                    <Text style={{fontSize:15, color:"black"}}> Completed </Text>
                </View>

                <Divider bold={true} style={{marginTop:8,backgroundColor:'#c7c7c7',marginBottom:8}}/>

                <View style={{flexDirection:'row',justifyContent:''}}>
                    <View style={{flex:1}}>
                        <View>
                            <Text style={{fontSize:15, color:"black"}}>Order on  </Text>
                            <Text style={{fontSize:14, color:"black"}}>   - 18 May 24  </Text>
                        </View>
                        <View style={{marginTop:3}}>
                            <Text style={{fontSize:15, color:"black"}}>Completed on  </Text>
                            <Text style={{fontSize:14, color:"black"}}>   - 20 Jun 24  </Text>
                        </View>
                        
                    </View>

                    <View style={{flex:1,flexDirection:'column',alignItems:'flex-end'}}>
                        <View>
                            <Text style={{fontSize:15, color:"black"}}>Send Amount     </Text>
                            <Text style={{fontSize:14, color:"black"}}>- CHF 1500.00</Text>
                        </View>
                        <View style={{marginTop:3}}>
                            <Text style={{fontSize:15, color:"black"}}>Receive Amount</Text>
                            <Text style={{fontSize:14, color:"black"}}>- LKR 500,000.00</Text>
                        </View>
                    </View>
                </View>

                <Divider bold={true} style={{marginVertical:15,backgroundColor:'#c7c7c7'}}/>

                <View style={{borderRadius:6,backgroundColor:'#ededed',padding:6}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                        <Text style={{fontSize:20, color:"#2f3133"}}>Sender</Text>
                        <Text style={{fontSize:15, color:"#363534"}}>Prasad Indika</Text>
                    </View>

                    <Divider bold={true} style={{marginTop:2,backgroundColor:'#c7c7c7',marginBottom:8}}/>

                    <View style={{margin:6}}>
                        <Text style={{fontSize:15, color:"#636362"}}>No 114, Ranaviru Mahesh Mw, Katuneriya </Text>
                    </View>
                    <View style={{margin:6}}>
                        <Text style={{fontSize:15, color:"#636362"}}>0770826701 </Text>
                    </View>

                </View>

                <View style={{borderRadius:6,backgroundColor:'#ededed',padding:6,marginTop:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                        <Text style={{fontSize:20, color:"#2f3133"}}>Reciever</Text>
                        <Text style={{fontSize:15, color:"#363534"}}>Ravishanker </Text>
                    </View>

                    <Divider bold={true} style={{marginTop:2,backgroundColor:'#c7c7c7',marginBottom:8}}/>

                    <View style={{margin:6}}>
                        <Text style={{fontSize:15, color:"#636362"}}>No 114, Colombo, Kadawatha </Text>
                    </View>
                    <View style={{margin:6}}>
                        <Text style={{fontSize:15, color:"#636362"}}>Sampath Bank </Text>
                    </View>
                    <View style={{margin:6}}>
                        <Text style={{fontSize:15, color:"#636362"}}>0770826701 </Text>
                    </View>

                </View>

                <View style={{backgroundColor:'#ededed',padding:6,marginTop:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                        <Text style={{fontSize:20, color:"#2f3133"}}>Money Deposits Recipts</Text>
                    </View>

                    <Divider bold={true} style={{marginTop:2,backgroundColor:'#c7c7c7',marginBottom:8}}/>

                    <View style={{backgroundColor:'white',margin:5}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                            <Text style={{fontSize:15, color:"#2f3133"}}>Business Partner name</Text>
                            <Text style={{fontSize:15, color:"#363534"}}>Done </Text>
                        </View>
                        <View style={{margin:6}}>
                            <Text style={{fontSize:15, color:"#636362"}}>Sampath Bank </Text>
                        </View>
                        <View style={{margin:6}}>
                            <Text style={{fontSize:15, color:"#636362"}}>25,000.00 </Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'white',margin:5}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',margin:3}}>
                            <Text style={{fontSize:15, color:"#2f3133"}}>Business Partner name</Text>
                            <Text style={{fontSize:15, color:"#363534"}}>NotConfirm </Text>
                        </View>
                        <View style={{margin:6}}>
                            <Text style={{fontSize:15, color:"#636362"}}>Sampath Bank </Text>
                        </View>
                        <View style={{margin:6}}>
                            <Text style={{fontSize:15, color:"#636362"}}>25,000.00 </Text>
                        </View>
                    </View>
                </View>
                
            </View>
            
            
            
            
            
            
             
        </Modal>
    </Portal>
  )
}
