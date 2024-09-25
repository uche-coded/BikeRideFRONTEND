import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={className`flex-1 bg-blue-700 justify-center items-center`}>
      <Link href={'/onBoarding1'}>
        <Text style={className`text-center text-white text-6x1`}>
          BikeRider-App
        </Text>
      </Link>
    </View>
  )
}

export default index
