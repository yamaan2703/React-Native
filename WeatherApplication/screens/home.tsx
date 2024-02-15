import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [location, setLocation] = useState([1, 2, 3]);

  return (
    <View style={[tw`flex-1`]}>
      <Image
        style={[tw`absolute inset-0 w-full h-full`, { zIndex: -1 }]}
        blurRadius={10}
        source={require('../images/background3.jpg')}
      />

      <SafeAreaView style={[tw`flex-1`]}>
        <View style={[tw`mx-4 mt-8`]}>
          <View
            style={[
              tw`flex-row items-center bg-white rounded-full p-2`,
              showSearch ? { backgroundColor: 'rgba(255, 255, 255, 0.4)' } : { backgroundColor: 'transparent' },
            ]}
          >
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
                { backgroundColor: showSearch ? 'transparent' : 'rgba(255, 255, 255, 0.4)' },
              ]}
            >
              <Icon name="search" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {location.length > 0 && showSearch ? (
            <View style={[tw`absolute w-full bg-gray-300 top-16 rounded-3xl m-1`]}>
              {location.map((city, index) => (
                <TouchableOpacity
                  onPress={() => console.log(city)}
                  key={index}
                  style={[
                    tw`flex-row items-center p-3 px-4 mb-1`,
                    index + 1 !== location.length && tw`border-b border-gray-900`,
                  ]}
                >
                  <Icon name="pin-drop" style={[tw`text-gray-900 text-lg px-2`]} />
                  <Text style={[tw`text-gray-900 text-lg`]}>{city}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
        </View>

        <View style={[tw`flex items-center justify-center mx-4 mb-2`]}>
          <Text style={[tw`text-white text-2xl font-bold`]}>London, </Text>
          <Text style={[tw`text-gray-300 text-lg font-semibold`]}>United Kingdom</Text>
        </View>

        <View style={[tw`flex items-center justify-center`]}>
          <Image source={require("../images/partlycloud.png")} style={[tw`w-48 h-48`]}/>
        </View>

        <View style={[tw`mt-4 items-center`]}>
          <Text style={[tw`text-center font-bold text-white text-6xl tracking-widest`]}>23°</Text>
          <Text style={[tw`text-center text-white text-xl tracking-widest`]}>Partly Cloudy</Text>
        </View>

        <View style={[tw`flex-row justify-between mx-4 my-5`]}>
          <View style={[tw`flex-row space-x-2 items-center`]}>
            <Icon name="air" size={30} style={[tw`text-white h-8 w-8`]}/>
            <Text style={[tw`text-white font-semibold text-base mx-1`]}>23km</Text>
          </View>
          <View style={[tw`flex-row space-x-2 items-center`]}>
            <Icon name="water-drop" size={30} style={[tw`text-white h-8 w-8`]}/>
            <Text style={[tw`text-white font-semibold text-base mx-1`]}>23%</Text>
          </View>
          <View style={[tw`flex-row space-x-2 items-center`]}>
            <Icon name="sunny" size={30} style={[tw`text-white h-8 w-8`]}/>
            <Text style={[tw`text-white font-semibold text-base mx-1`]}>6:05 AM</Text>
          </View>
        </View>

        <View style={[tw`mb-2 space-y-3`]}>
          <View style={[tw`flex-row items-center mx-5 space-x-2`]}>
            <Icon name="calendar-month" size={30} style={[tw`text-white`]}/>
            <Text style={[tw`text-white text-base mx-2`]}>Daily Forecast</Text>
          </View>

          <ScrollView
            horizontal={true}
            contentContainerStyle={{ padding: 15 }}
            showsHorizontalScrollIndicator={false}
          >
          <View style={[tw`flex justify-center items-center my-3 w-26 rounded-3xl py-3 space-y-1 mr-4`, { backgroundColor: 'rgba(255, 255, 255, 0.4)' }]}>
            <Image source={require("../images/thunder.png")}
            style={[tw`h-15 w-18`]}/>
            <Text style={[tw`text-white`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold`]}>23°</Text>
          </View>
          <View style={[tw`flex justify-center items-center my-3 w-26 rounded-3xl py-3 space-y-1 mr-4`, { backgroundColor: 'rgba(255, 255, 255, 0.4)' }]}>
            <Image source={require("../images/thunder.png")}
            style={[tw`h-15 w-18`]}/>
            <Text style={[tw`text-white`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold`]}>23°</Text>
          </View>
          <View style={[tw`flex justify-center items-center my-3 w-26 rounded-3xl py-3 space-y-1 mr-4`, { backgroundColor: 'rgba(255, 255, 255, 0.4)' }]}>
            <Image source={require("../images/thunder.png")}
            style={[tw`h-15 w-18`]}/>
            <Text style={[tw`text-white`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold`]}>23°</Text>
          </View>
          <View style={[tw`flex justify-center items-center my-3 w-26 rounded-3xl py-3 space-y-1 mr-4`, { backgroundColor: 'rgba(255, 255, 255, 0.4)' }]}>
            <Image source={require("../images/thunder.png")}
            style={[tw`h-15 w-18`]}/>
            <Text style={[tw`text-white`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold`]}>23°</Text>
          </View>
          <View style={[tw`flex justify-center items-center my-3 w-26 rounded-3xl py-3 space-y-1 mr-4`, { backgroundColor: 'rgba(255, 255, 255, 0.4)' }]}>
            <Image source={require("../images/thunder.png")}
            style={[tw`h-15 w-18`]}/>
            <Text style={[tw`text-white`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold`]}>23°</Text>
          </View>
          <View style={[tw`flex justify-center items-center my-3 w-26 rounded-3xl py-3 space-y-1 mr-4`, { backgroundColor: 'rgba(255, 255, 255, 0.4)' }]}>
            <Image source={require("../images/thunder.png")}
            style={[tw`h-15 w-18`]}/>
            <Text style={[tw`text-white`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold`]}>23°</Text>
          </View>
          <View style={[tw`flex justify-center items-center my-3 w-26 rounded-3xl py-3 space-y-1 mr-4`, { backgroundColor: 'rgba(255, 255, 255, 0.4)' }]}>
            <Image source={require("../images/thunder.png")}
            style={[tw`h-15 w-18`]}/>
            <Text style={[tw`text-white`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold`]}>23°</Text>
          </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
