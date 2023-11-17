import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Cart() {
    return (
        <View style={styles.container}>
            <Text style={styles.design}>
                Cart
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: 'center',
        alignItems: 'center',
    },
    design: {
        color: 'white',
        fontSize: 40
    }
})

export default Cart;