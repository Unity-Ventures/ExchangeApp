import * as React from 'react';
import { useEffect,useState } from 'react';
import { Text, View,StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Modal,Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import TextField from '../../common/TextField/TextField';
import CommonButton from '../../common/CommonButton/CommonButton';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import instance from '../../services/Axious';


export default function ModalAssignRunner({visible = false , onClose,order}) {

    const [runnerList , setRunnerList] = useState([
            {name:'Indika',contact:'077775551',country:'Srilanka'},
            {name:'Prasad',contact:'077775551',country:'Srilanka'},
            {name:'Jagath',contact:'077775551',country:'Srilanka'},
           
        ]);
    const [selectedRunner,setSelectedPartner] = useState({});

    const loadRunners = ()=>{
        // instance.get('/runner')
        // .then(function (response){
        //     setRunnerList(response.data)
        // })
    }

    const assignRunner = ()=>{

        const assignDetails = {
           
        }

        // instance.post('/payment_details',assignDetails)
        //         .then(function (response){
        //             console.log("done");
        //             instance.put(`/order/updateState/${order.orderId}`,{status:'assign'}).then(function (res){console.log("Succ");})
        //         })
        //         .catch(function (error){
        //             console.log("errorrr");
        //         })
    }

    const RunnerListItem = ({item})=>{
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


    useEffect(()=>{
        loadRunners();
    },[])


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
                    <Text style={styles.title}>Assign Runner</Text>
                </View>

                <View style={{marginTop:2}}>
                    <View style={styles.txtConainer}><Text style={styles.text2} >Ref No     -</Text><Text style={styles.text2} >{order?.referenceNo} </Text></View>
                    <View style={styles.txtConainer}><Text style={styles.text2} >Amount   -</Text><Text style={styles.text2} >{order?.receiveAmount}</Text></View>
                </View>

            </View>

            <View style={{height:"80%" , backgroundColor: "#ffffff", borderRadius:12, margin:"2%"}}>
                
                <View style={{margin:10}}>
                    <Text style={{color: '#636363',fontSize: 25,fontFamily:'Dosis-Regular'}}>{selectedRunner.name}</Text>
                </View>
                <View style={{marginHorizontal:8}}>
                    <TextField
                        label={'Search'}
                        //value={}
                        //onChange={}
                    />
                </View>

                    <FlatList
                        data={runnerList}
                        renderItem={({item})=> 
                            <RunnerListItem item={item}/>
                            }
                    />
                    
    
                <View style={{}}>
                    < CommonButton
                    style={styles.btn}
                    label={'Assign'}
                    //onPress={assignRunner}
                    //disabled={!isValid}
                />
                    </View>
            </View>


        </View>

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
        borderRadius: 8,
        width: "100%",
        height:50,
        fontSize: 18,
        textAlign:'center',
        justifyContent:'center',
        alignSelf:''
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
