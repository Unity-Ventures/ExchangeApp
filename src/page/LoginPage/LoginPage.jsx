import { Text, View, ScrollView, Image, StyleSheet, ImageBackground, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import TextField from '../../common/TextField/TextField';
import DesignButton from '../../common/CommonButton/CommonButton';
import instance from '../../services/Axious'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { storeData } from '../../utils/storage/Storage';
import { BackHandler } from 'react-native';
import DropdownList from '../../common/DropdownList';

export default function LoginPage({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role,setRole] = useState('');
    const [loading, setLoading] = useState(false);

    const [allRoles,setAllRoles] = useState([
        { label: 'Admin', value: '1' },
        { label: 'Partner', value: '2' },
        { label: 'Runner', value: '3' },
    ])

    const signIn = () => {
        setLoading(true);
        setTimeout(() => {
            customerSignIn()
            clear()
            setLoading(false);
        }, 1000);
    }

    const customerSignIn = () => {
        const aa = {
            userName: username,
            password: password,
            role:role
        }
        console.log("details",aa);
        if (username && password != null) {
            instance.post('/user/login', {
                userName: username,
                password: password,
                role:role
            })
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.token != null) {
                        storeData("token",response.data.token);
                        storeData("role",role);
                        if(role === 'Admin'){
                            navigation.navigate('Drawer');
                        }else if(role === 'Partner'){
                            navigation.navigate('BPartner');
                        }
                       
                    }else{
                       
                        console.log("invalid");
                        // Dialog.show({
                        //     type: ALERT_TYPE.WARNING,
                        //     title: 'Warning',
                        //     textBody: 'Invalid User Name or Password',
                        //     button: 'close',
                        // })
                        Toast.show({
                            type: ALERT_TYPE.SUCCESS,
                            title: 'Success',
                            textBody: 'Congrats! this is toast notification success',
                          })
                    }
                })
                .catch(function (error) {
                    console.log("error " + error);
                    console.log("login Un Success");
                });
            
        } else {
            console.log("no data");
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody: 'Enter Valed Data',
                button: 'close',
            })
        }
    }

    const clear = () => {
        setUsername('');
        setPassword('');
    }

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Register')
            setLoading(false);
        }, 1000);
    }

    const back = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Home')
            setLoading(false);
        }, 1000);

    }

    return (
        <View style={{flex:1,justifyContent:'center',backgroundColor:'#d5f0f5'}}>

            <View style={{marginBottom:25,marginLeft:20}}>
                <Text style={{color:'black',fontSize:35,fontFamily:'Dosis-SemiBold'}}> WELCOME</Text>
                <Text style={{color:'#2089c9',fontSize:28,fontFamily:'Dosis-Regular'}}> Global Money Exchange</Text>
            </View>
            

                <View style={styles.mainView}>

                    <View style={styles.textFieldContainer}>
                        <Text style={{fontSize:19,color:'black',fontFamily:'Dosis-Regular'}}> Username</Text>
                        <View style={styles.textView}>
                            <TextField value={username} style={styles.textField} onChange={(val) => setUsername(val)} />
                        </View>

                        <Text style={{fontSize:19,color:'black',fontFamily:'Dosis-Regular'}}> Password</Text>
                        <View style={styles.textView}>
                            <TextField value={password} type={'password'} style={styles.textField} onChange={(val) => setPassword(val)} />
                        </View>
                        <Text style={{fontSize:19,color:'black',fontFamily:'Dosis-Regular'}}> Role</Text>
                        <View style={styles.textView}>
                            <DropdownList margin={''} width={''} allCurrency={allRoles} onChange={(item)=>{setRole(item.label)}} placeholder='Select Role' />
                        </View>
                    </View>

                     <View style={styles.buttonContainer} >
                            <DesignButton
                                style={styles.btn}
                                buttonColor={'#A50010'}
                                textColor={'white'}
                                rippleColor={'#64000A'}
                                label={'Login'}
                                onPress={signIn}
                        />
                    </View>

                    {loading && (
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    )}
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    mainView: {
        display: "flex",
        alignItems: "center",
    },
    textFieldContainer: {
        width: "85%",
        marginTop: 20,
    },
    textField: {
        width: "100%",
    },
    textView: {
       paddingVertical:4
    },
    buttonContainer: {
        marginTop: 20,
        width: "85%"
    },
    btn: {
        borderRadius: 6,
        width: 325,
        fontSize: 18,
        fontFamily:'Dosis-Regular'
    },
    textContainer: {
        paddingTop: 15,
        display: 'flex',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'left',
        color: 'white',
    },

    text2: {
        fontSize: 15,
        fontStyle: 'italic',
        color: 'white',
        textAlign: 'right',
    },


    loaderContainer: {
        position: 'absolute',
        bottom: 40,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
    },

    topicView: {
        paddingTop: 50
    },

    topicText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },



});
