import { View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {responsiveHeight,} from "react-native-responsive-dimensions";

const Searchbar = () => {
    return (
        <View
            style={{
                backgroundColor: '#F2F3F2',
                height: responsiveHeight(6.5),
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                gap: 10
            }}
        >
            <FontAwesome name="search" size={24} color="black" />
            <TextInput
                placeholder='Search product'
            />
        </View>
    )
}

export default Searchbar