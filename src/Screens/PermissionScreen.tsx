import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { PermissionContext } from '../context/PermissionContext';
import BlackButton from '../components/BlackButton';


const PermissionScreen = () => {


  const { permissions, askLocationPermission } = useContext(PermissionContext)
  
  return (
    <View style={styles.container}>
      <Text style={ styles.subTitle }>Necesita dar permisos de ubicacion</Text>

      <BlackButton
        title='Permiso'
        onPress={()=> {askLocationPermission()}}
      />

      <Text>
        { JSON.stringify( permissions, null, 3)}
      </Text>
    </View>
  )
}

export default PermissionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle:{
    fontSize: 18,
    alignSelf: 'center'
  }
})