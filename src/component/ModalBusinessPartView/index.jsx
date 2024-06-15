import * as React from 'react';
import { Text, View } from 'react-native';
import { Modal,Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function ModalBusinessPartView({visible = false , onClose}) {

    const Tabs = createMaterialTopTabNavigator();
    return (
      <Portal>
          <Modal visible={visible} onDismiss={onClose} contentContainerStyle={{backgroundColor: 'white', padding: 20,height:"100%"}}>
            {/* <Tabs.Navigator>
                <Tabs.Screen name='Profile' >
                    {props => <></>}
                </Tabs.Screen>
                <Tabs.Screen name='Runers' >
                    {props => <></>}
                </Tabs.Screen>
                <Tabs.Screen name='Ongoing Tran.' >
                    {props => <></>}
                </Tabs.Screen>
                <Tabs.Screen name='Trans History' >
                    {props => <></>}
                </Tabs.Screen>
            </Tabs.Navigator> */}

          </Modal>
      </Portal>
    )
  }
