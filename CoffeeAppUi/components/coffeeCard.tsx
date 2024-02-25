import React from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';

const CoffeeCard = ({ item } : any) => {
    return (
        <View style={[tw`rounded-3xl bg-yellow-700 h-[350px] w-[250px]`]}>
             <View style={[tw`flex-row justify-center shadow-xl`,]}>
            <Image source={item.image} style={[tw`h-50 w-55 rounded-3xl m-3`]} />
        </View>
        </View>
    );
};

export default CoffeeCard;

{/* {coffeeItems.map((item) => (
                <View key={item.id} style={[tw`rounded-3xl bg-yellow-700 h-[350px] w-[250px]`]}>
                    <Image source={item.image} style={{ width: 250, height: 200 }} />
                    <Text style={[tw`text-black`]}>{item.name}</Text>
                    <Text style={[tw`text-black`]}>{item.price}</Text>
                    <Text style={[tw`text-black`]}>{item.volume}</Text>
                    <Text style={[tw`text-black`]}>{item.stars}</Text>
                    <Text style={[tw`text-black`]}>{item.desc}</Text>
                </View>
            ))} */}

