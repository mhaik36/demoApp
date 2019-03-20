const defaultState = {onLogin = null}

export function authenticationReducer( state = defaultState, action){
    if(action.type === 'ON_LOGIN') {
        return {onLogIn = action.user}
    }
    if(action.type === 'SAVE_TOKEN') {

    }
    if(action.type === 'GET_TOKEN') {

    }
    if(action.type === 'CHECK_TOKEN') {
        
    }
}