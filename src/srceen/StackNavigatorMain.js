import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainSreenSub1 from './MainSreenSub1';
import MainSreenSub2 from './MainSreenSub2';
import MainSreenSub3 from './MainSreenSub3';

const StackNavigatorMain = createStackNavigator(
    {
        Sub1: { screen: MainSreenSub1 },
        Sub2: { screen: MainSreenSub2 },
        Sub3: { screen: MainSreenSub3 },
    },
    {
        initialRouteName: 'Sub2',
    }
)
export default createAppContainer(StackNavigatorMain);


  