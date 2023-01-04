import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../Screens/LoadingScreen';
import Fab from './Fab';



interface Props {
    markers?: any
    // markers?: Marker[]
}

const Map = ( { markers  }: Props) => {

  const [showPolyline, setShowPolyline] = useState(true)

     const { 
      hasLocation, 
      initialPosition, 
      getCurrentLocation, 
      followUserLocation, 
      userLocation,
      stopFollowUserLocation,
      routeLines  } = useLocation()

     const mapViewRef = useRef<MapView>()
     const following = useRef<boolean>(true)

     useEffect(() => {
      followUserLocation()

      return ()=>{
        stopFollowUserLocation()
      }
     }, [])
     
     useEffect(() => {

      if( !following.current) return
        const { latitude, longitude} = userLocation

        mapViewRef.current?.animateCamera({
        center: { latitude, longitude}
      })
     }, [userLocation])
     


     const centerPosition = async () =>{

      const { latitude, longitude } = await getCurrentLocation()

      following.current = true

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
        onTouchStart={ ()=> following.current = false }
        >
          {
            showPolyline && (
              <Polyline 
          
              coordinates={routeLines}
              strokeColor='black'
              strokeWidth={3}
            />
            )
          }

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

        <Fab 
          iconName='brush-outline'
          onPress={ ()=> setShowPolyline( !showPolyline )}
          style={{
            position: 'absolute',
            bottom: 60,
            right: 10
          }}

          
        />
    </>
  )
}

export default Map

const styles = StyleSheet.create({})