import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const HomeLogo = () => {
  return (
    <View
      style={{
        marginBottom: -25,
        alignSelf: 'center',
      }}
    >
      <Image
        style = {{
          width: 170,
          resizeMode: 'contain'
        }}
        source={require('../assets/zugiside.png')}></Image>
    </View>
  )
}

export default HomeLogo