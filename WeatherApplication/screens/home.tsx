import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [location, setLocation] = useState([1, 2, 3]);

  let api_key = '843b3585ba284577bc7233248230404';

  return (
    <View style={[tw`flex-1`]}>
      <Image
        style={[tw`absolute inset-0 w-full h-full`, {zIndex: -1}]}
        blurRadius={10}
        source={require('../images/background3.jpg')}
      />
      <SafeAreaView style={[tw`flex flex-1`]}>
        {/* Search Section */}
        <View style={[tw`mx-4 relative z-50 h-20 mt-4`]}>
          <View
            style={[
              tw`flex-row justify-between items-center rounded-full pl-4 pr-2`,
              {backgroundColor: 'rgba(255, 255, 255, 0.2)'},
            ]}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor="gray"
              style={[tw`flex-1 text-base text-white`]}
            />
            <TouchableOpacity
              style={[
                tw`p-3 m-1 rounded-full`,
                {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
              ]}>
              <Icon name="search" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forecost Section */}
        <View style={[tw`mx-4 flex justify-around flex-1 mb-2`]}>
            <Text style={[tw`text-white text-center text-2xl font-bold`]}>London,
            <Text style={[tw`text-gray-300 text-center text-lg font-semibold`]}>United Kingdom</Text>
            </Text>

            {/* Weather Image */}
            <View style={[tw`flex-row justify-center`]}>
              <Image source={require("../images/partlycloud.png")}
              style={[tw`w-58 h-52`]}/>
            </View>

            {/* Degree */}
            <View style={[tw`space-y-2`]}>
              <Text style={[tw`text-center font-bold text-6xl ml-5 text-white`]}>23°C</Text>
              <Text style={[tw`text-center text-white text-xl tracking-widest`]}>Partly Cloud</Text>
            </View>

            {/* Other Status */}
            <View style={[tw`flex-row justify-between mx-4`]}>
              <View style={[tw`flex-row items-center space-x-2`]}>
                 <Icon name="air" size={30} style={[tw`text-white`]}/>
                <Text style={[tw`text-white font-semibold text-base mx-1`]}>23km</Text>
              </View>
              <View style={[tw`flex-row items-center space-x-2`]}>
                 <Icon name="water-drop" size={30} style={[tw`text-white`]}/>
                <Text style={[tw`text-white font-semibold text-base mx-1`]}>23%</Text>
              </View>
              <View style={[tw`flex-row items-center space-x-2`]}>
                 <Icon name="sunny" size={30} style={[tw`text-white`]}/>
                <Text style={[tw`text-white font-semibold text-base mx-1`]}>6:05 AM</Text>
              </View>
            </View>
        </View>

        <View>
          <View style={[tw`flex-row items-center mx-5 space-x-2`]}>
            <Icon name="calendar-month" size={30} style={[tw`text-white`]}/>
            <Text style={[tw`text-white mx-1 text-base`]}>Daily Forecast</Text>
          </View>

          <ScrollView
          horizontal={true}
          contentContainerStyle={{paddingHorizontal: 15}}
          showsHorizontalScrollIndicator={false}>
          <View style={[tw`flex justify-center items-center w-24 rounded-3xl my-4 py-3 mr-4`, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
            <Image source={require("../images/thunder.png")} 
            style={[tw`h-13 w-15`]}/>
            <Text style={[tw`text-white py-1`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold text-center`]}>23°C</Text>
          </View>

          <View style={[tw`flex justify-center items-center w-24 rounded-3xl my-4 py- mr-4`, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
            <Image source={require("../images/thunder.png")} 
            style={[tw`h-13 w-15`]}/>
            <Text style={[tw`text-white py-1`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold text-center`]}>23°C</Text>
          </View>

          <View style={[tw`flex justify-center items-center w-24 rounded-3xl my-4 py-3 mr-4`, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
            <Image source={require("../images/thunder.png")} 
            style={[tw`h-13 w-15`]}/>
            <Text style={[tw`text-white py-1`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold text-center`]}>23°C</Text>
          </View>

          <View style={[tw`flex justify-center items-center w-24 rounded-3xl my-4 py-3 mr-4`, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
            <Image source={require("../images/thunder.png")} 
            style={[tw`h-13 w-15`]}/>
            <Text style={[tw`text-white py-1`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold text-center`]}>23°C</Text>
          </View>

          <View style={[tw`flex justify-center items-center w-24 rounded-3xl my-4 py-3  mr-4`, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
            <Image source={require("../images/thunder.png")} 
            style={[tw`h-13 w-15`]}/>
            <Text style={[tw`text-white py-1`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold text-center`]}>23°C</Text>
          </View>

          <View style={[tw`flex justify-center items-center w-24 rounded-3xl my-4 py-3 mr-4`, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
            <Image source={require("../images/thunder.png")} 
            style={[tw`h-13 w-15`]}/>
            <Text style={[tw`text-white py-1`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold text-center`]}>23°C</Text>
          </View>

          <View style={[tw`flex justify-center items-center w-24 rounded-3xl my-4 py-3 mr-4`, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
            <Image source={require("../images/thunder.png")} 
            style={[tw`h-13 w-15`]}/>
            <Text style={[tw`text-white py-1`]}>Monday</Text>
            <Text style={[tw`text-white text-xl font-semibold text-center`]}>23°C</Text>
          </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
