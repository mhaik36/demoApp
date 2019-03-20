import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Dimensions, Image, View, AsyncStorage } from 'react-native'
import { Container, Button, Content, Form, Item, Input, Text, Icon, Toast } from 'native-base'
import { connect } from 'react-redux'
import * as actionCreater from '../../Components/redux/actionCreators'
const BG_IMAGE = require('../../images/background.jpg');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
class Login extends Component {
    constructor(props) {
        super(props);
         Text.defaultProps.uppercase = false;
        this.state = { username: '', password: '' };
    }
    static navigationOptions = { header: null };
    onButtonPress = () => {
        const {username, password} = this.state;
        if(username !== '' && password !== '') {
            // console.log('username:'+username);
            this.props.doLogin(this.state.username, this.state.password);
        } else 
            Toast.show({
                text: "Vui lòng nhập Tên đăng nhập hoặc mật khẩu!",
                // buttonText: "Okay",
                type: "danger",
                // duration: 3000
            });
        //  this.props.navigation.navigate('Main');
    }
    async  saveToken(token) {
        try {
            await AsyncStorage.setItem('@token', token);
        } catch (e) {
             console.log(e);
        }
    }
    componentDidUpdate() {
        //login success
		if (this.props.isLogged){
			this.props.navigation.navigate('Main');
        }
        if (this.props.token){
			this.saveToken(this.props.token);
		}
    }
    render() {
        let { height, width } = Dimensions.get('window');
        return (
            <Container >
                <ImageBackground source={BG_IMAGE} style={{ width: width, height: height }}>
                    <Content>
                        <Image style={styles.logo} source={require('../../images/i2i-logo.png')} />
                        <Form style={{ padding: 30 }}>
                            <Item style={{ marginLeft: 0, borderBottomWidth: 1 }}>
                                <Icon active
                                    style={{ color: '#8E8E93' }}
                                    name='ios-person' />
                                <Input style={{ color: '#FFFFFF' }}
                                    placeholderTextColor='#DADCDF'
                                    onChangeText={username => this.setState({ username })}
                                    value={this.state.username}
                                    placeholder='Tên đăng nhập' />
                            </Item>
                            <Item style={{ marginLeft: 0, borderBottomWidth: 1 }}>
                                <Icon active
                                    style={{ color: '#8E8E93' }}
                                    name='lock' />
                                <Input style={{ color: '#FFFFFF' }}
                                    placeholderTextColor='#DADCDF'
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    secureTextEntry
                                    placeholder='Mật khẩu' />
                            </Item>
                            <Button uppercase={true} style={{ top: 15, alignSelf: 'center' }}
                                rounded success
                                onPress={this.onButtonPress}>
                                <Text >ĐĂNG NHẬP</Text>
                            </Button>
                            <View style={{ top: 20, alignItems: 'center' }}>
                                <Text style={{ color: '#ADB2B0' }} >Hoặc</Text>
                            </View>
                            <Button transparent style={{ alignSelf: 'center', top: 10 }}>
                                <Text style={{ color: '#FFFFFF' }} >Tạo tài khoản mới</Text>
                            </Button>
                        </Form>
                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        isLogged: state.loginReducer.isLogged,
        token: state.loginReducer.token,
    };
}

export default connect(mapStateToProps, actionCreater)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    bgImage: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    logo: {
        // position: 'absolute',
        width: 100,
        height: 100,
        top: 20,
        alignSelf: 'center'
    },
});