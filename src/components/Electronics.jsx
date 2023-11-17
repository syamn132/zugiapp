import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Electronics = () => {
    return (
        <View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    gap: 7
                }}
            >
                <View
                    style={{
                        width: 130,
                        height: 190,
                        backgroundColor: 'lightgrey',
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15
                    }}
                >
                    <Image
                        style = {styles.image}
                        source={require('../assets/smartphone.png')}
                    ></Image>
                    <Text style={{
                        fontSize: 15,
                        color: 'black'
                    }}>Oneplus 9R</Text>
                    <Text style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold'
                    }}>Price: $150</Text>
                    <TouchableOpacity>
                        <Text
                            style={styles.button}
                        >Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: 130,
                        height: 190,
                        backgroundColor: 'lightgrey',
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15
                    }}
                >
                    <Image
                        style = {styles.image}
                        source={require('../assets/smartphone.png')}
                    ></Image>
                    <Text style={{
                        fontSize: 15,
                        color: 'black'
                    }}>Oneplus 9R</Text>
                    <Text style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold'
                    }}>Price: $150</Text>
                    <TouchableOpacity>
                        <Text
                            style={styles.button}
                        >Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: 130,
                        height: 190,
                        backgroundColor: 'lightgrey',
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15
                    }}
                >
                    <Image
                        style = {styles.image}
                        source={require('../assets/smartphone.png')}
                    ></Image>
                    <Text style={{
                        fontSize: 15,
                        color: 'black'
                    }}>Oneplus 9R</Text>
                    <Text style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold'
                    }}>Price: $150</Text>
                    <TouchableOpacity>
                        <Text
                            style={styles.button}
                        >Add to Cart</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 90,
        width: 60,
    },
    button: {
        backgroundColor: 'blue',
        width: 85,
        marginTop: 5,
        padding: 3,
        textAlign: 'center',
        color: 'white',
        borderRadius: 5
    }
})

export default Electronics