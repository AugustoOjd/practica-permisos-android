import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import { PermissionProvider } from './src/context/PermissionContext';

const AppState = ({children}: any) =>{
  return(
    <PermissionProvider>
    {children}
  </PermissionProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator/>
      </AppState>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})