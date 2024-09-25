// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import className from 'twrnc'

// const CustomButton = () => {
//   return (
//     <TouchableOpacity style={className`bg-blue-500`}  > 

//     </TouchableOpacity>
//   )
// }

// export default CustomButton


import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import className from 'twrnc';

interface CustomButtonProps {
  fillColor?: string;
  borderColor?: string;
  textColor?: string;
  text?: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  fillColor = 'bg-purple-500',
  borderColor = 'border-blue-700',
  textColor = 'text-white',
  text = 'Button',
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={className`flex items-center h-[15%] w-full mb-[5%] justify-center ${fillColor} ${borderColor} border rounded p-0`}
    >
      <Text style={className`${textColor} text-lg`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
