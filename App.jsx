import React, { useEffect, useState } from 'react'
import LoginPage from './src/page/LoginPage/LoginPage'
import RegisterPage from './src/page/RegisterPage/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StaffNavigation from './src/common/Navigation/StaffNavigation/StaffNavigation';
import AdminNavigation from './src/common/Navigation/AdminNavigation/AdminNavigation';
import BPNavigation from './src/common/Navigation/BPNavigation';
import WelcomeScreen from './src/page/WelcomeScreen';
import { getData } from './src/utils/storage/Storage';

const Stack = createStackNavigator();
export default function App() {

  const [login, setLogin] = useState(true)

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
            <Stack.Navigator>
                 <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                 <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                 <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }} />
                 <Stack.Screen name="Drawer" component={AdminNavigation} options={{ headerShown: false }} />
                 <Stack.Screen name="BPartner" component={BPNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
   

     {/* <PaperProvider>
       <MyProfile />
     </PaperProvider> */}

     </>
  )
}