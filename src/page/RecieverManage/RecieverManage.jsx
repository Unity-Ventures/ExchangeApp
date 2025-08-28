import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import AddSender from '../../component/AddSender/AddSender';
import RecieverList from '../../component/RecieverList/RecieverList';

export default function RecieverManage() {
    const Stack = createStackNavigator();
    
  return (
    <>
        <PaperProvider>
            <Stack.Navigator>
                <Stack.Screen name="RecieverList" component={RecieverList} options={{ headerShown: false }} />
                <Stack.Screen name="AddReciever" component={AddSender} options={{ headerShown: false }} />
            </Stack.Navigator>
        </PaperProvider>
    </>
  )
}
