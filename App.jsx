import React, { useEffect, useState } from 'react'
import LoginPage from './src/page/LoginPage/LoginPage'
import RegisterPage from './src/page/RegisterPage/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StaffNavigation from './src/common/Navigation/StaffNavigation/StaffNavigation';
import AdminNavigation from './src/common/Navigation/AdminNavigation/AdminNavigation';

const Stack = createStackNavigator();
export default function App() {

  const [login, setLogin] = useState(true)
  const [role,setRole] = useState("admin");

  useEffect(() => {
    checkLogin();
  }, [])


  const checkLogin = async () => {
    // const value = await AsyncStorage.getItem('stmToken');
    // try {
    //   if (value !== null) {
    //     setLogin(true)
    //   } else {
    //     setLogin(false)
    //   }
    // } catch (e) {
    //   console.error('Token Error :', error);
    //   setLogin(false)
    // }
  };

  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          {
            login ? (
              <Stack.Navigator>
                <Stack.Screen name="Drawer" component={role === "admin" ? AdminNavigation : StaffNavigation} options={{ headerShown: false }} />
              </Stack.Navigator>
            ) 
            : 
            (
              <Stack.Navigator>
                 <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                 <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />

                {/* <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }} />
                <Stack.Screen name="Reservation" component={ReservationPage} />
                <Stack.Screen name="CustomerVehicles" component={CustomerView} /> */}
              </Stack.Navigator>
            )
          }
        </NavigationContainer>
      </PaperProvider>
   

     {/* <PaperProvider>
       <MyProfile />
     </PaperProvider> */}

     </>
  )
}