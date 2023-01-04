import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../Screens/LoadingScreen';
import Fab from './Fab';



interface Props {
    markers?: any
    // markers?: Marker[]
}

const Map = ( { markers  }: Props) => {

     const { hasLocation, initialPosition, getCurrentLocation } = useLocation()

     const mapViewRef = useRef<MapView>()


     const centerPosition = async () =>{

      const { latitude, longitude } = await getCurrentLocation()

      mapViewRef.current?.animateCamera({
        center: { latitude, longitude}
      })
     }

     if( !hasLocation ){
        return <LoadingScreen/>
     }
  return (
    <>
        <MapView
          ref={ (el) => mapViewRef.current = el! }
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

        <Fab 
          iconName='locate-outline'
          onPress={ ()=> centerPosition()}
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10
          }}
        />
    </>
  )
}

export default Map

const styles = StyleSheet.create({})