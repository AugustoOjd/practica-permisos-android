import React, {useEffect, useState} from 'react'
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () =>{

    const [hasLocation,     setHasLocation] = useState(false)
    const [initialPosition, setInitialPosition] = useState<Location>()


    useEffect(() => {

        getCurrentLocation()
            .then( location => {

                setInitialPosition(location)

                setHasLocation(true)
            })

        // Geolocation.getCurrentPosition(
        //     ({ coords }) => {

        //         setInitialPosition({
        //             latitude: coords.latitude,
        //             longitude: coords.longitude
        //         })

        //         setHasLocation(true)
        //     },
        //     (err) => console.log(err),
        //     {
        //         enableHighAccuracy: true
        //     });
    }, [])

    const getCurrentLocation = (): Promise<Location> => {

        return new Promise ( (resolve, reject) =>{
            Geolocation.getCurrentPosition(
                ({ coords }) => {
    
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    })

                },
                (err) =>reject({err}),
                {
                    enableHighAccuracy: true
                });
        })
    }


    return {
        hasLocation,    
        initialPosition,
        getCurrentLocation
    }
}