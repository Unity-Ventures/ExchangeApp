import * as React from 'react';
import { Text, View,StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Modal,Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import TextField from '../../common/TextField/TextField';
import CommonButton from '../../common/CommonButton/CommonButton';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function ModalOrderItemAssign({visible = false , onClose,order}) {

    const [bPartnerList , setBPartnerList] = React.useState([{name:'Prasad',contact:'077775551',country:'Srilanka'},{name:'Prasad',contact:'077775551',country:'Srilanka'}]);
    const [selectedPartner,setSelectedPartner] = React.useState({});


    const BPartnerListItem = ({item})=>{
        return(
            <><TouchableOpacity onPress={()=>{setSelectedPartner(item)}}>
                 <View style={{margin:8,backgroundColor:'#f7f7f7',borderRadius:7,padding:10,elevation:2}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.text2}>{item.name}</Text>
                        <Text style={styles.text}>{item.contact}</Text>
                    </View>
          
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                        <Text style={styles.text}>{item.country}</Text>
                    </View> 
                </View>
                </TouchableOpacity></>
        )
    }

    const [assignBP, setAssignBP] = React.useState([{name:"Prasad"},{name : "Kasun"}]);


  return (
    <Portal>
        <Modal visible={visible} onDismiss={onClose} contentContainerStyle={{backgroundColor: 'white',width:'100%',height:'100%'}}>
            
        <View style={{height:"100%" , backgroundColor:"#d5f0f5"}}>
            <View style={{height:"18%",padding:12}}>

                <View style={{marginBottom:2}}>
                    <TouchableOpacity onPress={onClose}>
                        <Ionicons name="return-up-back" size={30} color="black"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Assign Partner</Text>
                </View>

                <View style={{marginTop:2}}>
                    <View style={styles.txtConainer}><Text style={styles.text2} >Ref No     -</Text><Text style={styles.text2} >12233039 </Text></View>
                    <View style={styles.txtConainer}><Text style={styles.text2} >Amount   -</Text><Text style={styles.text2} >100,000.00 </Text></View>
                </View>

            </View>

            <View style={{height:"80%" , backgroundColor: "#ffffff", borderRadius:12, margin:"2%"}}>
                
                <View style={{margin:10}}>
                    <Text style={{color: '#636363',fontSize: 25,fontFamily:'Dosis-Regular'}}>{selectedPartner.name}</Text>
                </View>
                <View style={{marginHorizontal:8}}>
                    <TextField
                        label={'Search'}
                        //value={}
                        //onChange={}
                    />
                </View>

                <SafeAreaView>
                   
                    <FlatList
                        data={bPartnerList}
                        renderItem={({item})=> 
                            <BPartnerListItem item={item}/>
                            }
                    />
                    
                </SafeAreaView>
            </View>


        </View>

























            {/* <View>
                <View style={styles.txtConainer}><Text style={styles.text} >Ref No     -</Text><Text style={styles.text} >12233039 </Text></View>
                <View style={styles.txtConainer}><Text style={styles.text} >Sender     -</Text><Text style={styles.text} >Kamal Perera </Text></View>
                <View style={styles.txtConainer}><Text style={styles.text} >Amount   -</Text><Text style={styles.text} >100,000.00 </Text></View>
                <View style={styles.txtConainer}><Text style={styles.text} >Pending   -</Text><Text style={styles.text} >50,000.00 </Text></View>
            </View>


            <View style={{marginVertical:15}}>
                <TextField
                    label={'Business Partner'}
                />
                <TextField
                    label={'Assign Amount'}
                />
                <Button
                    buttonColor='#0376ab'
                    textColor='white'
                    style={{marginTop:10,width:100,alignSelf:'flex-end'}}
                >
                    + Add
                </Button>
            </View>

            <View style={{borderColor:'#838485' , borderRadius:7 ,borderWidth:2,padding:10}}>
                {
                    assignBP.map((item)=>(
                        <AssignItem item={item}/>
                    ))
                }
            </View>
            <View style={styles.buttonContainer}>
                
                < CommonButton
                    style={styles.btn}
                    label={'Confirm And Assign'}
                    //onPress={()=>{onNext("reciever")}}
                />
            </View>    */}
        </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    txtConainer:{
        margin:2,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title: {
        color: '#1d86f0',
        fontSize: 26,
        textAlign: 'left',
        fontFamily:'Dosis-Bold'
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
        marginHorizontal:10
    },
    text: {
        color: '#636363',
        fontSize: 15,
        fontFamily:'Dosis-Regular'
    },
    text2: {
        color: '#636363',
        fontSize: 18,
        fontFamily:'Dosis-SemiBold'
    },
});
