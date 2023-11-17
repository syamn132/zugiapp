import { View, Text } from 'react-native'
import React from 'react'

const ProductsHeading = ({title}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '600'
                }}
            >{title}</Text>
            <Text
                style={{
                    fontSize: 16,
                    color: 'green'
                }}
            >View all</Text>
        </View>
    )
}

export default ProductsHeading