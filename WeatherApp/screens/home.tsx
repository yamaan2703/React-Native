import {
    View,
    Text
    
  } from 'react-native';
import tw from 'twrnc'

export default function Home () {
    return (
        <>
        <View style={[tw`bg-purple-500 h-screen`]}>
        <Text style={[tw`text-5xl text-blue-500 bg-white`]}>Homes</Text>
        </View>
        </>
    )
}