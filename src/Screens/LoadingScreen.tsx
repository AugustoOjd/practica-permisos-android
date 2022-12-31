import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={45}
      />
      <Text>Validando...</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})