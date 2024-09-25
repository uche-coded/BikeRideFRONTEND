import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import CustomButton from './CustomButton'

interface OnboardingCardProps {
  title: string
  body: string
  btntxt1: string
  btntxt2: string

  
}

const handlePress = () => {
  console.log('Button Pressed!')
}

const OnboardingCard: React.FC<OnboardingCardProps> = ({ title, body, btntxt1, btntxt2 }) => {
  return (
    <View
      style={className`bg-gray-50 rounded-tl-2xl rounded-tr-2xl h-[45%] w-full p-5 absolute bottom-0 left-0 right-0 flex flex items-start`}
    >
      <Text style={className`text-[30px] font-bold mb-2`}>{title}</Text>
      <Text style={className`text-[16px] mb-4 font-normal leading-[1.5]`}>
        {body}
      </Text>

      <CustomButton
        fillColor='bg-blue-600' // Using hex color
        borderColor='border-blue-600' // Optional: customize border color
        textColor='text-white' // Customize text color
        text={btntxt1}
        onPress={handlePress}
      />
      

      <CustomButton
        fillColor='' // Using hex color
        borderColor='border-blue-700' // Optional: customize border color
        textColor='text-black' // Customize text color
        text= {btntxt2}
        onPress={handlePress}
      />
    </View>
  )
}

export default OnboardingCard
