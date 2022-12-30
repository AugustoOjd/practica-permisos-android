import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})