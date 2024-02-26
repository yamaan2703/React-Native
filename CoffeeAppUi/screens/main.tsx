import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

function MainScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={[tw`bg-gray-500 flex-1`]}>
      <Image
        source={require('../assets/images/banner.jpg')}
        style={[tw`rounded-b-3xl`, { width: '100%', height: '100%' }]}
      />
      <View
        style={[
          tw`absolute inset-0 flex justify-center items-center`,
          { backgroundColor: 'rgba(0,0,0,0.7)' },
        ]}
      >
        <View>
          <Text
            style={[
              tw`text-5xl text-center italic font-extrabold text-yellow-700`,
            ]}
          >
            Coffee Bar
          </Text>
          <Text
            style={[
              tw`text-lg text-center italic p-1 text-gray-200`,
            ]}
          >
            Serving the Finest Coffee Creations in a Warm and Welcoming Atmosphere...
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={[
                tw`bg-yellow-700 text-center text-xl rounded-3xl py-3 w-48 mx-auto mt-10`,
              ]}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MainScreen;
