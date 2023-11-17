import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword} from "firebase/auth";
import { authentication } from '../../Firebaseconfig';

const Login = () => {
    const nav = useNavigation()
    const [loginCredentials, setloginCredentials] = useState({
        email: "",
        password: "",
      });
      const { email, password } = loginCredentials;

    const loginuser=()=>{
        signInWithEmailAndPassword(authentication,email,password).then((val)=>{
            nav.replace('HomeScreen')
        }).catch((err)=>{
            Alert.alert("Invalid Credentials");
        })
    }
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <Image
                style={{
                    marginTop: 50,
                    alignSelf: 'center'
                }}
                source={require('../assets/zugi.png')}>
            </Image>
            <View style={{
                paddingHorizontal: 20,
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: "500"
                }}>Login</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: 'grey',
                    marginTop: 10
                }}
                >Enter your credetails to Continue</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: 'grey',
                    marginTop: 40
                }}
                >Email</Text>
                <TextInput
                value={email}
                onChangeText={(val) => {
                  setloginCredentials({ ...loginCredentials, email: val });
                }}
                    keyboardType='email-address'
                    style={{
                        borderColor: "grey",
                        borderBottomWidth: 1,
                        fontSize: 16
                    }}
                />
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: 'grey',
                    marginTop: 40
                }}
                >Password</Text>
                <TextInput
                value={password}
                onChangeText={(val)=>{
                  setloginCredentials({...loginCredentials, password:val})
                }}
                    keyboardType='ascii-capable'
                    style={{
                        borderColor: "grey",
                        borderBottomWidth: 1,
                        fontSize: 16
                    }}
                />
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: 'black',
                        marginTop: 15,
                        letterSpacing: 0.7,
                        textAlign: 'right'
                    }}
                >Forgot Password?</Text>
                <TouchableOpacity
                    onPress={loginuser}

                    style={{
                        backgroundColor: 'green',
                        marginTop: 30,
                        height: 70,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        fontSize: 16,
                        color: "white",
                        fontWeight: "500"
                    }}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                gap: 5
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "600",
                }}>
                    Don't have an account?
                </Text>
                <TouchableOpacity
                    onPress={() => { nav.navigate('SignUp') }
                    }
                >
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "600",
                        color: 'green',
                    }}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Login