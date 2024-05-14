import * as React from 'react';
// import { View, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/containers/SignUp';
import StartUp from './src/containers/StartUp';
import CodeUp from './src/containers/CodeUp';
import ChatUp from './src/components/ChatListItems/ChatUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="CodeUp" component={CodeUp} />

        <Stack.Screen name="ChatUp" component={ChatUp} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
