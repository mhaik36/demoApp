

export function routeReducer(state = '', action) {
    if (action.type === 'INIT') {
        return 'Main';
    }
    if (action.type === 'MAIN') {
        return 'Main';
    }
    if (action.type === 'LOGIN') {
        return 'Login';
    }
    return state;
}