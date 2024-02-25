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
// import Carousel from 'react-native-snap-carousel';


export default function Home() {
  const [activeCat, setActiveCat] = useState(1);
  const [category, setCategory] = useState('');

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

  //    const coffeeItems = [
  //     {
  //         id: 1,
  //         name: "Black Coffee",
  //         price: "25.50",
  //         volume: "116 ml",
  //         stars: "4.6",
  //         image: require(" https://images.unsplash.com/photo-1621555470436-d36e9683bae5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D") ,
  //         desc: "Coffee's flavor hinges on factors like bean type, origin, roast, grind size, brewing method, water quality, and altitude. Each element adds a distinct note to the brew, creating a rich tapestry of tastes and aromas for aficionados to savor."
  //     },
  //     {
  //         id: 2,
  //         name: "Cappuccinco",
  //         price: "30.50",
  //         volume: "110 ml",
  //         stars: "4.4",
  //         image: require("https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FwcHVjY2lubyUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D") ,
  //         desc: "Coffee's flavor hinges on factors like bean type, origin, roast, grind size, brewing method, water quality, and altitude. Each element adds a distinct note to the brew, creating a rich tapestry of tastes and aromas for aficionados to savor."
  //     },
  //     {
  //         id: 3,
  //         name: "Latte",
  //         price: "15.50",
  //         volume: "100 ml",
  //         stars: "4.2",
  //         image: require("https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExhdHRlJTIwY29mZmVlfGVufDB8fDB8fHww") ,
  //         desc: "Coffee's flavor hinges on factors like bean type, origin, roast, grind size, brewing method, water quality, and altitude. Each element adds a distinct note to the brew, creating a rich tapestry of tastes and aromas for aficionados to savor."
  //     },
  //     {
  //         id: 4,
  //         name: "Espresso",
  //         price: "35.50",
  //         volume: "125 ml",
  //         stars: "4.7",
  //         image: require("https://images.unsplash.com/photo-1591377176334-bdf958755f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEVzcHJlc3NvJTIwY29mZmVlfGVufDB8fDB8fHww") ,
  //         desc: "Coffee's flavor hinges on factors like bean type, origin, roast, grind size, brewing method, water quality, and altitude. Each element adds a distinct note to the brew, creating a rich tapestry of tastes and aromas for aficionados to savor."
  //     },
  //     {
  //         id: 5,
  //         name: "Mocha",
  //         price: "15.50",
  //         volume: "116 ml",
  //         stars: "4.1",
  //         image: require("https://plus.unsplash.com/premium_photo-1668970851336-6c81cc888ba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TW9jaGElMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D") ,
  //         desc: "Coffee's flavor hinges on factors like bean type, origin, roast, grind size, brewing method, water quality, and altitude. Each element adds a distinct note to the brew, creating a rich tapestry of tastes and aromas for aficionados to savor."
  //     },
  //     {
  //         id: 6,
  //         name: "Americano",
  //         price: "30.50",
  //         volume: "126 ml",
  //         stars: "4.7",
  //         image: require("https://images.unsplash.com/photo-1642647391072-6a2416f048e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fE1vY2hhJTIwY29mZmVlfGVufDB8fDB8fHww") ,
  //         desc: "Coffee's flavor hinges on factors like bean type, origin, roast, grind size, brewing method, water quality, and altitude. Each element adds a distinct note to the brew, creating a rich tapestry of tastes and aromas for aficionados to savor."
  //     },

  // ]

  return (
    <>
      <SafeAreaView style={[tw`flex-1 bg-white`]}>
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
              style={[tw`text-yellow-700 bg-yellow-50 rounded-full`]}
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
              style={[tw`text-yellow-700`]}
            />
          </View>

          {/* Search Bar */}
          <View style={[tw`mx-4 mt-18`]}>
            <View
              style={[
                tw`flex-row justify-between items-center rounded-full pl-4 pr-2`,
                {backgroundColor: '#e6e6e6'},
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
        <View style={[tw`px-5 mt-6`]}>
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
                    isactive ? tw`bg-yellow-700` : tw`bg-yellow-600`,
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
        <View>
            <CoffeeCard />
        </View>
      </SafeAreaView>
    </>
  );
}
{/* <Carousel
                containerCustomStyle={{ overflow: 'visible' }}
                data={coffeeItems}
                renderItem={({ item }: { item: any }) => <CoffeeCard item={item} />}
                firstItem={1}
                inactiveSlideOpacity={0.75}
                inactiveSlideScale={0.77}
                sliderWidth={400}
                itemWidth={250}
                style={tw`flex items-center`}
            /> */}
