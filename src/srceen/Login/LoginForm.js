//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, AsyncStorage, StyleSheet, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import {  Button } from 'native-base';

// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', token: 'chua co luu' };
    }

    saveInfo = async (info) => {
        try {
            await AsyncStorage.setItem('info', info);
        } catch (error) {
            // Error saving data
        }
    }
    onButtonPress = (props) => {
        this.props.navigation.navigate('Main');
        // fetch('http://192.168.2.59/DemoAppService/createToken.php', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password,
        //     })
        // }).then((respone) => respone.json())
        //     .then((res) => {
        //         if (res.success == '0000') {
        //             // this.setState({token: res.token});

        //             this.saveInfo(JSON.stringify(res));
        //             Alert.alert(
        //                 '',
        //                 'Login Success!',
        //                 [
        //                     { text: 'OK', onPress: () => this.props.navigation.navigate('Details') },
        //                 ],
        //                 { cancelable: false }
        //             )
        //             this.setState({username: '', password: ''});
        //         } else {
        //             Alert.alert(res.success);
        //         }
        //     })
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Tên đăng nhập'
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TextInput style={styles.input}
                    returnKeyType="go" ref={(input) => this.passwordInput = input}
                    placeholder='Mật khẩu'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry />
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress}>
                    <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center', paddingTop:10}}>
                    <Text style={{color: '#ADB2B0'}} >Hoặc</Text>
                </View>
                <Button transparent style={{alignSelf: 'center', paddingTop: 10}}>
                    <Text style={{color: '#FFFFFF', fontSize:15}} >Tạo tài khoản mới</Text>
                </Button>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#006b76',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    }

});

//make this component available to the app
export default withNavigation(LoginForm);
