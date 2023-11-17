import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from '../utils/ElectronicsData'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { FontAwesome5 } from '@expo/vector-icons';

const ItemsCarousel = ({ data }) => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: responsiveHeight(33),
              borderWidth: 2,
              borderColor: "lightgrey",
              width: responsiveWidth(45),
              marginRight: 20,
              borderRadius: 15,
              justifyContent: 'center',
            }}
          >
            <Image
              style={{ height: 140, width: 120, alignSelf: 'center', resizeMode: 'contain' }}
              source={{ uri: item.img }}
            />
            <View
              style={{ paddingHorizontal: 10, gap: 3 }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "600" }}
              >{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
              <Text
                style={{ color: 'grey' }}
              >{item.description}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 5,
                  marginTop: 5
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold' }}
                >${item.price}</Text>
                <FontAwesome5 name="cart-plus" size={25} color="green" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ItemsCarousel