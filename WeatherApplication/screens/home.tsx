import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  let api_key = '843b3585ba284577bc7233248230404';

  const fetchWeatherData = async () => {
    try {
      const trimmedSearchInput = searchInput.trim();
      if (!trimmedSearchInput) {
        Alert.alert('Please enter a city name.');
        return;
      }

      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${trimmedSearchInput}&days=7&aqi=no&alerts=no`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      if (data.error) {
        Alert.alert('City not found. Please enter a valid city name.');
        return;
      }
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
      Alert.alert('This City Name not Match the API.');
    }
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <KeyboardAvoidingView
      style={[tw`flex-1`]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar hidden />
      <Image
        style={[tw`absolute inset-0 w-full h-full`, {zIndex: -1}]}
        blurRadius={10}
        source={require('../images/background3.jpg')}
      />
      <SafeAreaView style={[tw`flex-1`]}>
        <ScrollView contentContainerStyle={[tw`flex-grow`]}>
          <View style={[tw`mx-4 mt-4`]}>
            <View
              style={[
                tw`flex-row justify-between items-center rounded-full pl-4 pr-2`,
                {backgroundColor: 'rgba(255, 255, 255, 0.2)'},
              ]}>
              <TextInput
                placeholder="Search City"
                placeholderTextColor="gray"
                style={[tw`flex-1 text-base text-white`]}
                onChangeText={text => setSearchInput(text)}
                value={searchInput}
              />
              <TouchableOpacity
                style={[
                  tw`p-3 m-1 rounded-full`,
                  {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
                ]}
                onPress={handleSearch}>
                <Icon name="search" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {weatherData && !weatherData.error ? (
            <View style={[tw`mx-4 mb-2 mt-6`]}>
              <Text style={[tw`text-white text-center text-4xl font-bold`]}>
                {weatherData.location.name}
              </Text>
              <Text
                style={[tw`text-gray-400 text-center text-xl font-semibold`]}>
                {weatherData.location.country}
              </Text>
              <View style={[tw`flex-row justify-center`]}>
                <Image
                  source={{uri: `https:${weatherData.current.condition.icon}`}}
                  style={[tw`w-60 h-60`]}
                />
              </View>
              <View style={[tw`space-y-2`]}>
                <Text
                  style={[tw`text-center font-bold text-6xl ml-5 text-white`]}>
                  {weatherData.current.temp_c}°C
                </Text>
                <Text
                  style={[tw`text-center text-white text-xl tracking-widest`]}>
                  {weatherData.current.condition.text}
                </Text>
              </View>
              <View style={[tw`flex-row justify-between mx-4 my-4`]}>
                <View style={[tw`flex-row items-center space-x-2`]}>
                  <Icon name="air" size={30} style={[tw`text-white`]} />
                  <Text style={[tw`text-white font-semibold text-base mx-1`]}>
                    {weatherData.current.wind_kph} km/h
                  </Text>
                </View>
                <View style={[tw`flex-row items-center space-x-2`]}>
                  <Icon name="water-drop" size={30} style={[tw`text-white`]} />
                  <Text style={[tw`text-white font-semibold text-base mx-1`]}>
                    {weatherData.current.humidity}%
                  </Text>
                </View>
                <View style={[tw`flex-row items-center space-x-2`]}>
                  <Icon name="schedule" size={30} style={[tw`text-white`]} />
                  <Text style={[tw`text-white font-semibold text-base mx-1`]}>
                    {new Date(
                      weatherData.current.last_updated,
                    ).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Text>
                </View>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}>
                {weatherData.forecast.forecastday
                  .splice(0, 7)
                  .map((day, index) => (
                    <View
                      key={index} // Use a unique key prop
                      style={[
                        tw`flex justify-center items-center w-24 rounded-3xl my-4 py-2 px-1 mr-4`,
                        {backgroundColor: 'rgba(255, 255, 255, 0.2)'},
                      ]}>
                      <Image
                        source={{uri: `https:${day.day.condition.icon}`}}
                        style={[tw`h-13 w-15`]}
                      />
                      <Text style={[tw`text-white py-1 text-center`]}>
                        {new Date(day.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                        })}
                      </Text>
                      <Text
                        style={[
                          tw`text-white text-xl font-semibold text-center`,
                        ]}>
                        {day.day.avgtemp_c}°C
                      </Text>
                    </View>
                  ))}
              </ScrollView>
            </View>
          ) : (
            <View style={[tw`flex h-full justify-center items-center`]}>
              <Text style={[tw`text-4xl text-white font-bold`]}>Weather AppLication</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
