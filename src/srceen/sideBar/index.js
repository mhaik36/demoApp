
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import IHIcon from '../../Components/theme/icon/IHIcon';
import * as actionCreater from '../../Components/redux/actionCreators';
import { Container, Content, Text, Icon, ListItem, Footer, View } from 'native-base';

// import { Actions } from 'react-native-router-flux';
// import { closeDrawer } from '../../actions/drawer';
import styles from './style';

const singUp = require('../../images/BG-signUp.png');

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'No Login',
      image: 'https://farm8.staticflickr.com/7903/45667772275_6d1e8a8aa5_m.jpg',
    };
  }
  componentWillMount() {
    this.props.initRouteName();
  }

  render() {
    const { routeName } = this.props;
    return (
      <Container style={{ backgroundColor: '#FFFFFF' }}>
        {/* <ImageBackground source={singUp} style={styles.background} > */}
        {/* <Header style={{ alignItems: 'center', backgroundColor: '#FFFFFF'}}>
              <Image
                style={{flex: 1, width: 100, height: 100}}
                source={{uri: this.state.image}}
              />
              <Title style={{flex: 1}}>{this.state.fullName}</Title>
          </Header> */}
        <Content style={styles.drawerContent}>
          <View style={{ alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#cccfd0', marginBottom: 10 }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: this.props.userData.image }}
            />
            <Text style={{ color: '#ff6900' }}>{this.props.userData.fullName}</Text>
          </View>
          <ListItem
            button iconLeft
            // onPress={() => { Actions.home(); this.props.closeDrawer(); }}
            style={styles.links}
          >
            <IHIcon family="SimpleLineIcons" name="settings" style={{ fontSize: 25, color: '#d9534f' }} />
            {/* <Icon name="build" style={{ color: '#d9534f' }} /> */}
            <Text style={styles.linkText} >CÀI ĐẶT</Text>
          </ListItem>

          <ListItem
            button iconLeft
            // onPress={() => { Actions.blankPage(); this.props.closeDrawer(); }}
            style={styles.links}
          >
            <Icon name="ios-heart-empty" style={{ fontSize: 30, color: '#d9534f' }} />
            {/* <IHIcon family="SimpleLineIcons" name="heart" style={{ fontSize: 25, color: '#d9534f' }} /> */}
            <Text style={styles.linkText}>SỞ THÍCH</Text>
          </ListItem>
          <ListItem
            button iconLeft
            onPress={() => { 
              this.props.logout();
              this.props.navigation.navigate('Login') 
            }}
            style={styles.links}
          >
            <Icon  name="ios-log-out" style={{ fontSize: 25, color: '#d9534f' }} />
            <Text style={styles.linkTextLogout} >ĐĂNG XUẤT</Text>
          </ListItem>
        </Content>
        {/* <Footer style={{left: 0}}>
          <ListItem
            button iconLeft
            onPress={() => { this.props.navigation.navigate('Login') }}
            style={styles.links}
          >
            <Icon name="ios-log-out" style={{ color: '#d9534f' }} />
            <Text style={styles.linkTextLogout} >ĐĂNG XUẤT</Text>
          </ListItem>
        </Footer> */}
        {/* </ImageBackground> */}
      </Container>
    );
  }
}

// export default connect(mapStateToProps, bindAction)(SideBar);
const mapStateToProps = function (state) {
  return {
    userData: state.loginReducer.userData,
  };
}

export default connect(mapStateToProps, actionCreater)(SideBar);