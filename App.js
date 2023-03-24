import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PropertyHomeScreen from './screens/propertyModule/PropertyHomeScreen';
import PayProperty from './screens/propertyModule/PayProperty';
import Splash from './screens/Splash';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PropertyHomeScreen" component={PropertyHomeScreen} />
        <Stack.Screen name="PayProperty" component={PayProperty}/>
        <Stack.Screen name="Splash" component={Splash}/>
      </Stack.Navigator>
    </NavigationContainer>
   </TailwindProvider>
  );
}
