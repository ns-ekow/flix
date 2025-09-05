import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

interface Props{
    placeholder: string
    onPress?: ()=> void
    value?: string
    onChangeText?: (text: string)=> void
}

const SearchBar = ({value, placeholder, onPress, onChangeText}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View className='flex-row items-center bg-white rounded-full px-5 py-4'>
        <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff'/>
        <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor='#a8b5db'
        className='flex-1 ml-2 text-gray-600'
         />
      </View>
    </TouchableOpacity>
  )
}

export default SearchBar