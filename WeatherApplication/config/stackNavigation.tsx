import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{headerShown: false}}
        name="Home" 
        component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;