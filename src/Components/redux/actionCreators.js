// import axios from 'axios';
// const URL = "https://server2912me.herokuapp.com/word/";
import { Alert } from 'react-native';

export function lockedOpen() {
    return { type: 'LOCKED_OPEN' }
}
export function init() {
    return { type: 'INIT' }
}
export function initRouteName() {
    return { type: 'INIT_ROUTE_NAME' }
}
export function loginSuccess(userData) {
    return {
      type: 'LOGIN_SUCCESSFULLY',
      userData
    };
}
export  function saveToken(token) {
    return {
        type: 'SAVE_TOKEN',
        token: token
    }
}
export  function logout() {
    return {
        type: 'LOGOUT'
    }
}

export function doLogin(username, password) {
    return function (dispatch) {
        fetch('http://vitreum-rays.000webhostapp.com/DemoAppService/createToken.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(respone => respone.json())
                .then(res => {
                    // console.log('JSON:' + JSON.stringify(res));
                    if(res.success == '0000') {
                    
                        dispatch(loginSuccess({fullName: res.fullName, image: res.image}));
                        dispatch(saveToken(res.token));
                    }else {
                        Alert.alert(res.success);
                        // console.log(res.success);
                    }
                })
                .catch(err => console.log(err));
    }
}
export  function navigate(routeName) {
    return {
        type: 'NAVIGATE',
        routeName
    }
}