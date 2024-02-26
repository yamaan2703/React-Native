import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CoffeeCard from '../components/coffeeCard';
import Carousel from 'react-native-snap-carousel';
import {coffeeItems} from '../data/coffeeData';

export default function Home() {
  const [activeCat, setActiveCat] = useState(1);
  // const [category, setCategory] = useState('');

  const categories = [
    {
      id: 1,
      title: 'Cappuccinco',
    },

    {
      id: 3,
      title: 'Espresso',
    },
    {
      id: 4,
      title: 'Mocha',
    },
    {
      id: 5,
      title: 'Americano',
    },
    {
      id: 6,
      title: 'Black Coffee',
    },
  ];

  return (
    <>
      <SafeAreaView style={[tw`flex-1 bg-black`]}>
        <StatusBar />
        <View style={[tw`w-full h-[220px] relative`]}>
          <Image
            source={require('../assets/images/banner.jpg')}
            style={[tw`w-full h-full absolute`]}
          />
          <View
            style={[
              tw`absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60`,
            ]}
          />
          {/* Header */}
          <View style={[tw`flex-row justify-between items-center px-5 mt-2`]}>
            <Icon
              name="person"
              size={35}
              style={[
                tw`text-white border border-white rounded-full p-1`,
              ]}
            />
            <View style={[tw`flex-row items-center space-x-2`]}>
              <Icon
                name="location-on"
                size={25}
                style={[tw`text-yellow-700`]}
              />
              <Text style={[tw`text-md text-white text-base font-semibold`]}>
                Karachi, Pakistan
              </Text>
            </View>
            <Icon
              name="notifications"
              size={35}
              style={[
                tw`text-white border border-white rounded-full p-1`,
              ]}
            />
          </View>

          {/* Search Bar */}
          <View style={[tw`mx-4 mt-18`]}>
            <View
              style={[
                tw`flex-row justify-between items-center rounded-full pl-4 pr-2`,
                {backgroundColor: 'rgb(203 213 225)'},
              ]}>
              <TextInput
                placeholder="Search"
                placeholderTextColor="gray"
                style={[tw`flex-1 text-base text-white`]}
              />
              <TouchableOpacity
                style={[tw`p-3 m-1 rounded-full bg-yellow-700`]}>
                <Icon name="search" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* categories */}
        <View style={[tw`px-5 mt-3`]}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id.toString()}
            style={[tw`overflow-visible`]}
            renderItem={({item}) => {
              let isactive = item.id === activeCat;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCat(item.id)}
                  style={[
                    tw`p-4 px-5 rounded-full mr-2 shadow`,
                    isactive ? tw`bg-yellow-900` : tw`bg-yellow-700`,
                  ]}>
                  <Text style={[tw`font-semibold text-white`]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Coffee card */}
        <View style={[tw`mt-5 py-2`]}>
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={coffeeItems}
            renderItem={({item}: {item: any}) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={250}
            style={tw`flex items-center`}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
