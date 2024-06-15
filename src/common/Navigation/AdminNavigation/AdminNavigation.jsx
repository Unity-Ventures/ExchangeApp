import React from 'react'
import { useState } from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import SamplePage from '../../../page/SamplePage/SamplePage';
import SmplPg from '../../../page/SmplPg/SmplPg';
import SenderManage from '../../../page/SenderManage/SenderManage';
import RecieverManage from '../../../page/RecieverManage/RecieverManage';
import NewOrder from '../../../page/NewOrder/NewOrder';
import OrderManage from '../../../page/OrderManage/OrderManage';
import BPManage from '../../../page/BusinessPartnerManage';
import StaffManage from '../../../page/StaffManage';
import RunnerManage from '../../../page/RunnerManage';
import Dashboard from '../../../page/Dashboard';
import MoreMenuItems from '../../../page/MoreMunuIItems';
import WelcomeScreen from '../../../page/WelcomeScreen';
import { removeData } from '../../../utils/storage/Storage';
import CustomerManage from '../../../page/CustomerManage';
import { createStackNavigator } from '@react-navigation/stack';
import ExchangeRates from '../../../page/ExchangeRates/ExchangeRates';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function AdminNavigation({ navigation }) {

  const [loading, setLoading] = useState(false);

  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      //removeValue()
      removeData('token');
      navigation.navigate('Login');
      setLoading(false);
    }, 1000);

  };

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('stmToken')
      const value = await AsyncStorage.getItem('stmToken')
      if (value === null) {
        navigation.navigate('Home')
        console.log('=============', value);
      } else {
        console.log("Error Log Out");
      }
    } catch (e) {
      console.log(e);
    }
  }




  return (

    <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Transacations" component={OrderManage} options={{headerShown:false}} />
        <Stack.Screen name="New Transaction" component={NewOrder} options={{headerShown:false}} />
        <Stack.Screen name="Business Partners" component={BPManage} options={{headerShown:false}} />
        <Stack.Screen name="Customers" component={CustomerManage} options={{headerShown:false}}  />
        <Stack.Screen name="Staff" component={StaffManage} />
        <Stack.Screen name="Runner Manage" component={RunnerManage} />
        <Stack.Screen name="More" component={MoreMenuItems} />
        <Stack.Screen name="Rates" component={ExchangeRates} />
    </Stack.Navigator>



    // <Drawer.Navigator

    //   initialRouteName='Dashboard'

    //   drawerContent={props => {
    //     return (

    //       <DrawerContentScrollView {...props}>
    //         <DrawerItemList {...props} />
    //         <AlertNotificationRoot>
    //           <DrawerItem label="Logout" onPress={logout} />
    //         </AlertNotificationRoot>
    //       </DrawerContentScrollView>
    //     )

    //     {
    //       loading && (
    //         <View style={styles.loaderContainer}>
    //           <ActivityIndicator size="large" color="white" />
    //         </View>
    //       )
    //     }
    //   }}

    // >

    //   <Drawer.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
    //   <Drawer.Screen name="Transacations" component={OrderManage} options={{headerShown:false}} />
    //   <Drawer.Screen name="New Transaction" component={NewOrder} options={{headerShown:false}} />
    //   <Drawer.Screen name="Business Partners" component={BPManage} options={{headerShown:false}} />
    //   <Drawer.Screen name="Customers" component={CustomerManage} options={{headerShown:false}}  />
    //   <Drawer.Screen name="Staff" component={StaffManage} />
    //   <Drawer.Screen name="Runner Manage" component={RunnerManage} />
    //   <Drawer.Screen name="Exchange Rate Manage" component={ExchangeCalculator} />
    //   <Drawer.Screen name="More" component={MoreMenuItems} />
    // </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
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

});
