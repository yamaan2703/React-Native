import React from 'react';
import {Text, View, Image} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CoffeeCard = ({item}: any) => {
  return (
    
    <View style={[tw`rounded-3xl bg-yellow-700 h-[350px] w-[250px]`, { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }]}>
  <Image
    source={item.image}
    style={[tw`w-full h-60 rounded-3xl`, { resizeMode: 'cover' }]}
  />
  <View
    style={[
      tw`absolute top-0 right-0 rounded-tr-3xl rounded-bl-3xl flex-row items-center p-2`,
      { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
    ]}
  >
    <Icon name="star" size={20} style={[tw`text-yellow-600`]} />
    <Text style={[tw`text-white text-lg px-1`]}>{item.stars}</Text>
  </View>

  <Text style={[tw`text-white text-2xl font-bold px-3 my-2`]}>{item.name}</Text>
  <View style={[tw`flex-row justify-between items-center`]}>
    <Text style={[tw`text-xl font-semibold text-white px-2`]}>
      $ {item.price}
    </Text>
    <Icon
      name="add"
      size={30}
      style={[
        tw`text-yellow-700 bg-white p-1 mx-2 rounded-full`,
        {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      ]}
    />
  </View>
</View>

  );
};

export default CoffeeCard;

