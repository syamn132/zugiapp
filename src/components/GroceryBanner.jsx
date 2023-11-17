import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeBanner = () => {
  return (
    <View>
      <Image 
        style={{
            marginTop: 5,
            height: responsiveHeight(12),
            width: responsiveWidth(89),
            resizeMode: 'contain',
            borderRadius: 10
        }}
        source={require('../assets/grocerybanner.png')} />
    </View>
  )
}

export default HomeBanner