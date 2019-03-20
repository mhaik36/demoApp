export function routeNameReducer(state = '', action) {
    if (action.type === 'INIT_ROUTE_NAME') {
        return 'Main';
    }
    return state;
}