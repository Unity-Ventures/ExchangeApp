import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Modal,Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import CommonButton from '../../common/CommonButton/CommonButton';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { launchCamera,launchImageLibrary } from 'react-native-image-picker';

export default function ModalPartnerOrderConfirm({visible,onClose,order}) {

    const [imgUrl,setImgUrl] = React.useState('');
    const [img,setImage] = React.useState(null);

    const openCamera = async ()=>{
        const res = await launchCamera();
        setImgUrl(res?.assets[0]?.uri)
        console.log(res);
    }

    const openGalary = async ()=>{
        const res = await launchImageLibrary();
        setImgUrl(res?.assets[0]?.uri)
    }

  return (
    <Portal>
        <Modal visible={visible} onDismiss={onClose} contentContainerStyle={{backgroundColor: 'white',height:"100%"}}>

           <View style={{flex:1, backgroundColor:"#d5f0f5"}}>

            <View style={{height:"12%",padding:12}}>

                <View style={{marginBottom:2}}>
                    <TouchableOpacity onPress={onClose}>
                        <Ionicons name="return-up-back" size={30} color="black"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Confirm & Upload Recipt</Text>
                </View>



            </View>

            <View style={{height:"84%" , backgroundColor: "#ffffff", borderRadius:12, margin:"2%"}}>
                <View style={{}}>
                    <View style={styles.imgContainer}>
                        <Image 
                            source={{uri:imgUrl}}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={()=>{openCamera()}}>
                            <View style={styles.uploadBtn}>

                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>{openGalary()}}>
                            <View style={styles.uploadBtn}>

                            </View>
                        </TouchableOpacity>

                        <View style={styles.uploadBtn}>

                        </View>
                    </View>
                </View>

                <View style={{margin:15}}>
                    < CommonButton
                        style={styles.btn}
                        label={'Upload and Confirm'}
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

    btn: {
        borderRadius: 8,
        width: "100%",
        height:50,
        fontSize: 18,
        textAlign:'center',
        justifyContent:'center',
        fontFamily:'Dosis-Bold'
    },

    imgContainer:{
        margin:15,
        height:350,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:8

    },
    btnContainer:{
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10
    },
    uploadBtn:{
        height: 60,
        width:60,
        borderWidth:1,
        borderRadius:6
    },
    titleContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title: {
        color: '#1d86f0',
        fontSize: 26,
        textAlign: 'left',
        fontFamily:'Dosis-Bold'
    },
    img:{
        borderRadius:20,
        width:275,
        height:360,
        borderWidth:2
    }
  
});

