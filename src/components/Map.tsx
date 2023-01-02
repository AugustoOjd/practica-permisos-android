import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../Screens/LoadingScreen';



interface Props {
    markers?: any
    // markers?: Marker[]
}

const Map = ( { markers  }: Props) => {

     const { hasLocation, initialPosition } = useLocation()

     if( !hasLocation ){
        return <LoadingScreen/>
     }
  return (
    <>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1}}
          showsUserLocation
          initialRegion={{
            latitude: initialPosition?.latitude ?? 0,
            longitude: initialPosition?.longitude ?? 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        >

        {/* <Marker
        // key={index}
        coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
        }}
        title={'title'}
        description={'esto es marker'}
        /> */}
        </MapView>
    </>
  )
}

export default Map

const styles = StyleSheet.create({})