import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { check, openSettings, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';


export interface PermissionState {
    locationStatus: PermissionStatus
}

export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable'
}

type PermissionContextProps = {
    permissions: PermissionState
    askLocationPermission: () => void
    checkLocationPermission: () => void
}

export const PermissionContext = createContext({} as PermissionContextProps) 


export const PermissionProvider = ({children}: any ) => {

    const [permissions, setPermissions] = useState(permissionInitState)

    useEffect(() => {

        checkLocationPermission()

        AppState.addEventListener('change', state => {
            
            if(state !== 'active')return

            checkLocationPermission()
        })

    }, [])
    

    const askLocationPermission  = async () =>{

        let permissionStatus: PermissionStatus

        if(Platform.OS === 'ios'){
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )
        }else{
            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        }

        if( permissionStatus === 'blocked'){
            openSettings()
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }
    const checkLocationPermission = async () =>{

        let permissionStatus: PermissionStatus

        if(Platform.OS === 'ios'){
            permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )
        }else{
            permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }

    return (
        <PermissionContext.Provider value={{
            permissions,
            askLocationPermission,  
            checkLocationPermission
        }}>
            {children}
        </PermissionContext.Provider>
    )
}