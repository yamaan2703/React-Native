import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function ProductScreen(props: any) {
  const item = props.route.params;
  const navigation = useNavigation()
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelection = size => {
    setSelectedSize(size);
  };
  return (
    <View style={[tw`flex-1 bg-black`]}>
      <ScrollView style={[tw``]}>
        <SafeAreaView>
          <Image
            source={item.image}
            style={[tw`w-full h-90 rounded-3xl p-2`, {resizeMode: 'cover'}]}
          />
          <View style={[tw`absolute top-0 left-0 right-0 bottom-0`]}>
            <View style={[tw`absolute top-5 left-3`]}>
              <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
                style={[tw`rounded-full p-2 border border-white`]}>
                <Icon
                  name="arrow-back"
                  size={25}
                  style={[tw`text-white font-bold`]}
                />
              </TouchableOpacity>
            </View>
            <View style={[tw`absolute top-5 right-3`]}>
              <TouchableOpacity
                style={[tw`rounded-full p-2 border border-white`]}>
                <Icon name="favorite" size={25} style={[tw`text-white`]} />
              </TouchableOpacity>
            </View>
            <View
              style={[
                tw`absolute bottom-0 left-0 right-0 p-4 rounded-3xl`,
                {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
              ]}>
              <Text style={[tw`text-white text-xl font-bold px-2 pb-1`]}>
                {item.name}
              </Text>
              <Text style={[tw`text-gray-300 text-lg px-2`]}>
                Volume: {item.volume}
              </Text>
              <View style={[tw`flex-row items-center px-2`]}>
                <Icon
                  name="star"
                  size={20}
                  style={[tw`text-yellow-600 text-lg`]}
                />
                <Text style={[tw`text-white text-lg px-x`]}>{item.stars}</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View style={[tw`my-2 p-3`]}>
          <Text style={[tw`text-white text-xl font-bold`]}>Description.</Text>
          <Text style={[tw`text-gray-300 font-md`]}>{item.desc}</Text>
        </View>

        <View style={[tw`p-3`]}>
          <Text style={[tw`text-xl text-white mb-2`]}>Size</Text>
          <View style={[tw`flex-row justify-between`]}>
            <TouchableOpacity
              onPress={() => handleSizeSelection('S')}
              style={[
                tw`text-yellow-900 border-2 border-yellow-900 text-center w-25 rounded-xl p-2 text-xl font-bold`,
                selectedSize === 'S' && tw`bg-yellow-900`,
              ]}>
              <Text style={[selectedSize === 'S' && tw`text-white`]}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSizeSelection('M')}
              style={[
                tw`text-yellow-900 border-2 border-yellow-900 text-center w-25 rounded-xl p-2 text-xl font-bold`,
                selectedSize === 'M' && tw`bg-yellow-900`,
              ]}>
              <Text style={[selectedSize === 'M' && tw`text-white`]}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSizeSelection('L')}
              style={[
                tw`text-yellow-900 border-2 border-yellow-900 text-center w-25 rounded-xl p-2 text-xl font-bold`,
                selectedSize === 'L' && tw`bg-yellow-900`,
              ]}>
              <Text style={[selectedSize === 'L' && tw`text-white`]}>L</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[tw`flex-row items-center justify-between p-2 mt-8`]}>
          <View style={[tw`border-white px-2`]}>
            <Text style={[tw`text-lg text-white text-center`]}>Price</Text>
            <Text style={[tw`text-2xl text-white font-bold`]}>
              <Text style={[tw`text-yellow-600`]}>$</Text> {item.price}
            </Text>
          </View>
          <TouchableOpacity style={[tw``]}>
            <Text
              style={[
                tw`text-white bg-yellow-700 text-2xl text-center py-2 rounded-xl w-[200px]`,
              ]}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
