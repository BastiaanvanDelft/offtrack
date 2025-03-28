import { StyleSheet, Text, View, Pressable, Alert, ImageBackground, Image } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../assets/images/WelcomeScreen.png")} style={styles.background}>

            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require("../assets/images/logo.png")}></Image>
                <Text Text style={styles.title}>Explore a new world with us</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.buttonStyling} onPress={() => Alert.alert("Registered!")}>
                <Text style={styles.buttonTextStyling}>REGISTER</Text>
                </Pressable>
                <Pressable style={styles.buttonStyling} onPress={() => Alert.alert("Logged in")}>
                <Text style={styles.buttonTextStyling}>LOGIN</Text>
                </Pressable>
            </View>

        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
        letterSpacing: 3
    },
    container: {
        height: "100%",
        width: "100%"
    },
    background: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    logo: {
        flex: 0.8,
        height: "80%",
        width: "70%",
        justifyContent: "space-around",
        flexDirection: "column",
        paddingLeft: 25,
    },
    buttons: {
        flex: 0.2,
        justifyContent: "space-around",
        alignItems: "center",
        height: "20%",
        paddingBottom: 30
    },
    buttonStyling: {
        backgroundColor: "black",
        borderRadius: 10,
        width: 300,
        height: 45
    },
    buttonTextStyling: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: "center",
        paddingTop: 10
    }
})