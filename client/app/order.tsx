import { View, Image } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import tw from 'twrnc'

export default function order() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('./delivery')
        }, 1000)
    })
  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <Image source={require('@/assets/images/extras/delivery.gif')} style={tw`w-full h-60`} />
    </View>
  )
}