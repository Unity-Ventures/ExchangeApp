import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { removeData } from '../../utils/storage/Storage'
import Iconic from 'react-native-vector-icons/Ionicons'

export default function MoreMenuItems({navigation}) {
  return (

    <>
      <View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Business Partners')}}>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',margin:10,padding:10,borderRadius:10,elevation:3}}>
            <Iconic name="person" size={25} color="black" />
                <Text style={{fontSize:20,color:'black',fontFamily:'Dosis-Bold',marginLeft:5}}>Business Partner</Text>
            </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
            <View style={{backgroundColor:'gray',margin:10,padding:10,borderRadius:10}}>
                <Text style={{fontSize:25,color:'white'}}>Reports</Text>
            </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>{
          removeData("token");
          removeData("role");
          navigation.navigate("Login");
        }}>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',margin:10,padding:10,borderRadius:10,elevation:3}}>
            <Iconic name="log-out" size={25} color="black" />
                <Text style={{fontSize:20,color:'black',fontFamily:'Dosis-Bold',marginLeft:5}}> Logout</Text>
            </View>
        </TouchableOpacity>
      </View>
    </>
  //  <View>
  //     <TouchableOpacity>
  //         <View style={{borderRadius:8,backgroundColor:'gray',margin:'10',padding:'10'}}>
  //             <Text style={{fontSize:'20'}}>Business Partner</Text>
  //         </View>
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //         <View style={{borderRadius:8,backgroundColor:'gray',margin:'10',padding:'10'}}>
  //             <Text style={{fontSize:'20'}}>Business Partner</Text>
  //         </View>
  //     </TouchableOpacity>
  //  </View>
  )
}
