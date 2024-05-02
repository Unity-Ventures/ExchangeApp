import { View ,StyleSheet } from "react-native"
import { PaperProvider, Text, TextInput } from "react-native-paper"
import TextField from "../../common/TextField/TextField";
import CommonButton from "../../common/CommonButton/CommonButton";

function AddSender(){

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Add Sender</Text>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldName}>First Name *</Text>
                <TextField
                    //value={}
                    //onChange={}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldName}>Last Name *</Text>
                <TextField
                    //value={}
                    //onChange={}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldName}>NIC *</Text>
                <TextField
                    //value={}
                    //onChange={}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldName}>Contact No *</Text>
                <TextField
                    //value={}
                    //onChange={}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldName}>Address *</Text>
                <TextField
                    //value={}
                    //onChange={}
                />
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldName}>Country *</Text>
                <TextField
                    //value={}
                    //onChange={}
                />
            </View>

            <View style={styles.buttonContainer}>
                < CommonButton
                    style={styles.btn}
                    label={'Save'}
                    onPress={()=>{}}
                />

                < CommonButton
                    style={styles.btn}
                    label={'Cancel'}
                    onPress={()=>{}}
                />
            </View>


            
        </>
    )
}

export default AddSender

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
        justifyContent:'space-around',
        margin:10
    },
});