//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import { Dimensions } from 'react-native'
import LoginForm from './LoginForm';

// let ScreenHeight = Dimensions.get("window").height;
// create a component
class LoginScreen extends Component {
     static navigationOptions = { header: null };
    render() {
        return (
        <View  style={styles.container}>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../images/i2i-logo.png')} />
                  
                    </View>
               <View style={styles.formContainer}>
                   <LoginForm />
               </View>
               
         
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50', //#2c3e50  #006400 #388E3C 045508
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

//make this component available to the app
export default LoginScreen;
