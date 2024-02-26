import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import tw from 'twrnc';
import Favourite from '../screens/favourite';
import Cart from '../screens/cart';
import ProductScreen from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Product"
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function HomeTabs() {
//   return (
//     <Tab.Navigator
//     screenOptions={{
//       headerShown: false,
//       tabBarActiveTintColor: 'rgb(168, 85, 247)', // Corrected the RGB syntax
//       tabBarInactiveTintColor: 'gray',
//       tabBarStyle: {
//         backgroundColor: 'rgb(247, 220, 111)', // Change bottom navbar background color to yellow-700
//       },
//     }}>
//     <Tab.Screen
//       name="Home"
//       component={Home}
//       options={{
//         tabBarIcon: ({ focused }) => (
//           <Icon
//             name="home"
//             size={35}
//             style={[
//               tw`text-yellow-900`, 
//               focused && tw`bg-white`, 
//             ]}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Favourite"
//       component={Favourite}
//       options={{
//         tabBarIcon: ({ focused }) => (
//           <Icon
//             name="favorite"
//             size={35}
//             style={{ color: focused ? 'rgb(168, 85, 247)' : 'gray' }}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Cart"
//       component={Cart}
//       options={{
//         tabBarIcon: ({ focused }) => (
//           <Icon
//             name="add"
//             size={35}
//             style={{ color: focused ? 'rgb(168, 85, 247)' : 'gray' }}
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>
  
//   );
// }

