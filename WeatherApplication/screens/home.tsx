import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [location, setLocation] = useState([1, 2, 3])
  return (
    <View style={[tw`flex-1`]}>
      <Image
        style={[tw`absolute inset-0 w-full h-full`, {zIndex: -1}]}
        blurRadius={10}
        source={require('../images/background3.jpg')}
      />

      <SafeAreaView style={[tw`flex-1`]}>
        <View style={[tw`mx-4 mt-8`]}>
          <View
            style={[
              tw`flex-row items-center bg-white rounded-full p-2`,
              showSearch
                ? {backgroundColor: 'rgba(255, 255, 255, 0.4)'}
                : {backgroundColor: 'transparent'},
            ]}>
            {showSearch ? (
              <TextInput
                style={[tw`flex-1 pl-4 text-base`]}
                placeholder="Search City"
                placeholderTextColor="lightgray"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => setShowSearch(!showSearch)}
              style={[
                tw`p-2 rounded-full bg-green-500`,
                {backgroundColor: 'rgba(255, 255, 255, 0.4)'},
              ]}>
              <Icon name="search" size={30} color="white" />
            </TouchableOpacity>
          </View>
          {
  location.length > 0 && showSearch ? (
    <View style={[tw`absolute w-full bg-gray-300 top-16 rounded-3xl m-1`]}>
      {location.map((x, i) => (
        <TouchableOpacity
          key={i}
          style={[tw`flex-row items-center p-3 px-4 mb-1`, (i + 1 !== location.length) && tw`border-b-gray-900 border-b-2`]}>
          <Icon name="pin-drop" style={[tw`text-gray-900 text-lg px-2`]}/>
          <Text style={[tw`text-gray-900 text-lg`]}>London, UK</Text>
        </TouchableOpacity>
      ))}
    </View>
  ) : null
}

        </View>
      </SafeAreaView>
    </View>
  );
}
