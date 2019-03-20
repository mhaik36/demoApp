export const _INITIAL_STATE_ = {
    routeName : 'MAIN_HOME' // 'MAIN_HOME' - 'MAIN_FAVORITE' - 'MAIN_PROFILE'
}
export function mainReducer(state = _INITIAL_STATE_, action){
    switch (action.type) {
        case 'NAVIGATE':
            return {...state, routeName: action.routeName}
    
        default:
            return  {...state}
    }
}