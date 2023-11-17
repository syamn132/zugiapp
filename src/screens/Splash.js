import { View, Image, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from "@react-navigation/native"

const Splash = () => {
    const nav = useNavigation()

    useEffect(() => {
     setTimeout(() => {
        nav.replace('Login')
     }, 2000);
    }, [])
    

  return (
    <View style={styles.container}>
      <Image 
        style = {styles.logo}
        source={require('../assets/zugi.png')}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center'
    }
})

export default Splash