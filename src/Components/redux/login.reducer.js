export const _INITIAL_STATE_ = {
    userData: {
        fullName: 'No Login',
        image: 'https://farm8.staticflickr.com/7903/45667772275_6d1e8a8aa5_m.jpg',
    },
    isLoading: false,
    isLogged: false,
    lastError: undefined,
    hasError: false,
    resetNavigation: undefined,
    isSaveToken: false,
    token: null
};

export function loginReducer(state = _INITIAL_STATE_, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESSFULLY':
            return {
                ...state,
                userData: action.userData,
                isLogged: true
            };
        case 'SAVE_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'LOGOUT':
            return {
                ...state,
                isLogged: false,
                userData: {
                    fullName: 'No Login',
                    image: 'https://farm8.staticflickr.com/7903/45667772275_6d1e8a8aa5_m.jpg',
                }
            };

        default:
            return state;
    }
}