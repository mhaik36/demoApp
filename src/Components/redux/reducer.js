import { combineReducers } from 'redux';
import { routeReducer } from './route.reducer';
import {drawerLockModeReducer} from './drawerLockMode.reduce';
import {routeNameReducer} from './routeName.reduce';
import {loginReducer} from './login.reducer';
import {mainReducer} from './main.reducer'


export const reducer = combineReducers({
    route: routeReducer,
    routeName: routeNameReducer,
    drawerLockMode: drawerLockModeReducer,
    loginReducer,
    mainReducer
})
