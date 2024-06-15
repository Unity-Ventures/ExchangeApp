import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView,View ,StyleSheet } from "react-native"
import { PaperProvider, Text, TextInput } from "react-native-paper"
import TextField from '../../common/TextField/TextField';
import CommonButton from '../../common/CommonButton/CommonButton';
import { Icon ,MD3Colors  } from 'react-native-paper';
import BPListItem from '../../component/BPListItem';
import RunnerListItem from '../../component/RunnerListItem';

export default function RunnerManage() {

    const [runnerList , setbpList] = useState([{name: "Prasad Indika" , ContactNo:"0777939393"},{name: "Dilusha Dishani" , ContactNo:"0777939393"},{name: "Prasad Indika" , ContactNo:"0777939393"}]);

  return (
    <>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Runners</Text>
        </View>

        <View style={styles.fieldContainer}>
            <TextField
                label={'Search Runner'}
                //value={}
                //onChange={}
            />
        </View>

        <View style={styles.buttonContainer}>
            < CommonButton
                style={styles.btn}
                label={'Add'}
                //onPress={()=>{navigation.navigate('')}}
            />
        </View>

        <SafeAreaView>
            <FlatList
                data={runnerList}
                renderItem={({item})=> <RunnerListItem item={item} onViewClick={()=>{
                    // setSelectedOrder(item)
                    // setVisible(true)
                }}/>}
          />
        </SafeAreaView>

        
    </>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
       marginVertical:15
    },
    title: {
        color: '#44357F',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    fieldName: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    fieldContainer: {
       margin:10
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
        margin:10
    },
    listSenderName: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
    },
});
