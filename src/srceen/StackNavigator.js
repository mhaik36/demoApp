import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './MainScreen';
import LoginScreen from './Login/Login';
import MainSreenSub1 from './MainSreenSub1';

const StackNavigator = createStackNavigator(
    {
        Main: { screen: MainScreen },
        Login: { screen: LoginScreen },
        MainSub1: { screen: MainSreenSub1}
    },
    {
        initialRouteName: 'Login',
    }
)
export default createAppContainer(StackNavigator);


  