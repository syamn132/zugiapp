import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeBanner = () => {
  return (
    <View>
      <Image 
        style={{
            height: responsiveHeight(15),
            width: responsiveWidth(89),
            resizeMode: 'contain',
        }}
        source={require('../assets/banner.png')} />
    </View>
  )
}

export default HomeBanner