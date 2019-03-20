import * as Expo from "expo";
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import DrawerNavigator from './src/srceen/DrawerNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Components/redux/store';
import { Root } from "native-base";
import { View, Text, Image } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      active: true
    };
  }
  // Later on in your component
  async componentDidMount() {
    await cacheImages([
      require('./src/images/background.jpg'),
      require('./src/images/i2i-logo.png'),
      // ========= AFTER LOGIN ======== //
      require('./src/images/coffee-cup.jpg'),
      require('./src/images/mia-garden-coffee.jpg'),
      require('./src/images/oz-coffee-house.jpg'),
    ]);

    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      // 'MaterialIcons': require('native-base/Fonts/MaterialIcons.ttf'),
      'SimpleLineIcons': require('native-base/Fonts/SimpleLineIcons.ttf'),
    });
    // await Promise.all([...imageAssets, ...fontAssets]);
    this.setState({ isReady: true });
  }
  render() {
    const active = this.state.active;
    let route = 'Home'
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Root>
        <Provider store={store}>
          <DrawerNavigator />
        </Provider>
      </Root>
    );
  }
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Expo.Asset.fromModule(image).downloadAsync();
    }
  });
}