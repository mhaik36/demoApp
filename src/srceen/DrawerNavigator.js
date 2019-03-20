import { createDrawerNavigator, createAppContainer } from "react-navigation";
import StackNavigator from './StackNavigator';
import Sidebar from './sideBar/index';
import React, {Component} from 'react';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: StackNavigator
    },
  }, {
    contentComponent: props => <Sidebar {...props} />,
  }
);
StackNavigator.navigationOptions = ({navigation}) => {
  return { drawerLockMode: navigation.state.index !==1 ? 'locked-open' : 'unlocked' }
}

export default createAppContainer(DrawerNavigator);