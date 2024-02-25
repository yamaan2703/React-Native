import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import tw from 'twrnc';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: false,
        // tabBarActiveTintColor: 'rgb(0, 0, 0)',
        // tabBarInactiveTintColor: 'gray',
      }}>
     <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={35}
              style={[
                { color: focused ? 'rgb(113, 63, 18)' : 'rgb(161, 98, 7)' },
                // Add Tailwind CSS classes here if needed
                // Example: tw`p-2`
              ]}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart"
              size={35}
              style={{color: focused ? 'rgb(168 85 247)' : 'gray'}}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="add"
              size={35}
              style={{color: focused ? 'rgb(168 85 247)' : 'gray'}}
            />
          ),
        }}
        name="Home"
        component={Home}
      /> */}
    </Tab.Navigator>
  );
}
