import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import AddSender from '../../component/AddSender/AddSender';
import SenderList from '../../component/SenderList/SenderList';

export default function SenderManage() {
    const Stack = createStackNavigator();

  return (
    <>
        <PaperProvider>
            <Stack.Navigator>
                <Stack.Screen name="SenderList" component={SenderList} options={{ headerShown: false }} />
                <Stack.Screen name="AddSender" component={AddSender} options={{ headerShown: false }} />
            </Stack.Navigator>
        </PaperProvider>
    </>
  )
}
