import * as React from 'react';
import { Dialog, Portal, } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import DesignButton from '../../common/CommonButton/CommonButton';
import rent_car_2 from '../../assets/img/rent_car_2.jpg';
import instance from '../../services/Axious';
import { useEffect, useState } from 'react';

export default function DiologBox({ visible, onDismiss, item }) {

    const [brandName, setBrandName] = useState(item?.brandName)
    const [moduleName, setModuleName] = useState(item?.moduleName)
    const [fuelType, setFuelType] = useState(item?.type)
    const [trType, setTrType] = useState(item?.transmission)
    const [passengers, setPassengers] = useState(item?.passengers)
    const [drPrice, setDrPrice] = useState(item?.dailyRental)
    const [limit, setLimit] = useState(item?.dailyKm)
    const [extraKm, setExtraKm] = useState(item?.extraKm)

    useEffect(() => {
       console.log(item);
    }, [])


    const reservationNow = () => {
        console.log("resavatio");
    }

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <ScrollView>
                    <View style={styles.mainView}>
                        <View style={styles.imageContainer}>
                            <Image  
                                source={{uri: 'http://192.168.8.104:8080/'+item.imgs[0].image,}}
                                style={styles.image} 
                            />
                        </View>

                        <View style={styles.carDetails}>
                            <Text variant="headlineLarge" style={styles.carName}>{brandName} {moduleName}</Text>
                            <View style={styles.detailItem}>
                                <Text variant="titleMedium" style={styles.detailLabel}>Fuel Type</Text>
                                <Text variant="titleMedium" style={styles.detailLabel}>{fuelType}</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Text variant="titleMedium" style={styles.detailLabel}>Transmission Type</Text>
                                <Text variant="titleMedium" style={styles.detailLabel}>{trType}</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Text variant="titleMedium" style={styles.detailLabel}>Seats</Text>
                                <Text variant="titleMedium" style={styles.detailLabel}>{passengers}</Text>
                            </View>

                            <View style={styles.detailItem}>
                                <Text variant="titleMedium" style={styles.detailLabel}>Daily Rental Price</Text>
                                <Text variant="titleMedium" style={styles.detailLabel}>Rs.{drPrice}</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Text variant="titleMedium" style={styles.detailLabel}>Daily Limit Kilometers</Text>
                                <Text variant="titleMedium" style={styles.detailLabel}>{limit} Km</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Text variant="titleMedium" style={styles.detailLabel}>Extra Km</Text>
                                <Text variant="titleMedium" style={styles.detailLabel}>Rs.{extraKm}</Text>
                            </View>
                        </View>

                        <View style={styles.btnView}>
                            <DesignButton
                                style={styles.btn}
                                buttonColor={'#A50010'}
                                textColor={'white'}
                                rippleColor={'#64000A'}
                                label={'Reservation Now'}
                                onPress={reservationNow}
                            />
                        </View>
                    </View>
                </ScrollView>



            </Dialog>
        </Portal>
    )
}
const styles = StyleSheet.create({
    mainView: {
        padding: 20
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    carDetails: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    carName: {
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color:'blue'
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    detailLabel: {
        fontWeight: 'bold',
        color:'black'
    },
    btnView: {
        padding: 15,
    },
    btn: {
        borderRadius: 10,
        width: '100%',
        fontSize: 18,
    },
});
