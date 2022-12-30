import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import MapScreen from '../Screens/MapScreen';
import PermissionScreen from '../Screens/PermissionScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen"           component={HomeScreen} />
      <Stack.Screen name="PermissionScreen"     component={PermissionScreen} />
      <Stack.Screen name="MapScreen"            component={MapScreen} />
    </Stack.Navigator>
  );
}

export default Navigator