import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import MapScreen from '../Screens/MapScreen';
import PermissionScreen from '../Screens/PermissionScreen';
import { PermissionContext } from '../context/PermissionContext';
import LoadingScreen from '../Screens/LoadingScreen';

const Stack = createStackNavigator();

function Navigator() {


  const { permissions } = useContext(PermissionContext)

  if(permissions.locationStatus === 'unavailable'){
    return <LoadingScreen/>
  }
  return (
    <Stack.Navigator
        // initialRouteName='PermissionScreen'
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      {
        (permissions.locationStatus === 'granted')
        ?
        <Stack.Screen name="MapScreen"            component={MapScreen} />
        :
        <Stack.Screen name="PermissionScreen"     component={PermissionScreen} />
      }

      {/* <Stack.Screen name="HomeScreen"           component={HomeScreen} /> */}
      
    </Stack.Navigator>
  );
}

export default Navigator