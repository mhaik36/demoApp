import React, { Component } from 'react';
import {
    Container, Header, Content, Footer,
    FooterTab, Button, Text, Icon, Left,
    Body, Title, Right, Item, Input
} from 'native-base';
import { Platform, ScrollView } from 'react-native'
import MainSreenSub1 from './MainSreenSub1';
import MainSreenSub2 from './MainSreenSub2';
import MainSreenSub3 from './MainSreenSub3';
import { MAIN_HOME, MAIN_FAVORITE, MAIN_PROFILE, PLATFORM_IOS } from '../global/variable'
import { connect } from 'react-redux';
import * as actionCreater from '../Components/redux/actionCreators';

class MainScreen extends Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled: false, // Disable swipe back action in stack navigation
    };
    constructor() {
        super();
        this.state = {
            activeHome: true,
            activeFavorite: false,
            activeProfile: false,
            routeName: MAIN_HOME,
            hasFocus: false
        };
    }
    setFocus(hasFocus) {
        this.setState({ hasFocus });
    }
    // Later on in your component
    onPressHome(key) {
        let activeHome = false;
        let activeFavorite = false;
        let activeProfile = false;
        let routeName = MAIN_HOME;
        switch (key) {
            case 1:
                routeName = MAIN_HOME;
                activeHome = true;
                break;
            case 2:
                routeName = MAIN_FAVORITE;
                activeFavorite = true;
                break;
            case 3:
                routeName = MAIN_PROFILE;
                activeProfile = true;
                break;
            default:
                break;
        }
        this.setState({
            activeHome,
            activeFavorite,
            activeProfile,
            routeName
        })
    }
    renderContent(routeName) {
        if (MAIN_HOME === this.state.routeName)
            return <MainSreenSub1 />
        if (MAIN_FAVORITE === this.state.routeName)
            return <MainSreenSub2 />
        if (MAIN_PROFILE === this.state.routeName)
            return <MainSreenSub3 />
    }
    render() {
        return (
            <Container>
                <Header searchBar rounded style={{ backgroundColor: '#FFFFFF', }}>
                    {this.state.hasFocus ?
                        null
                        :
                        <Left >
                            <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                                <Icon style={{ color: '#00c497' }} name='menu' />
                            </Button>
                        </Left>
                    }
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                            placeholder="Tìm kiếm"
                            onFocus={this.setFocus.bind(this, true)}
                            onBlur={this.setFocus.bind(this, false)}
                        />
                        {/* <Icon name="ios-people" /> */}
                    </Item>
                    {/* <Item rounded>
                        <Input placeholder='Tìm kiếm' />
                    </Item> */}
                    {
                        Platform.OS === PLATFORM_IOS ?
                            <Button transparent>
                                <Text style={{ color: '#00c497' }}>Tìm kiếm</Text>
                            </Button>
                            :
                            <Right>
                                <Button transparent>
                                    <Text style={{ color: '#00c497' }}>Tìm kiếm</Text>
                                </Button>
                            </Right>


                    }
                </Header>
                    {/* <Header searchBar rounded style={{ backgroundColor: '#FFFFFF' }}>
                        <Item>
                            <Icon name="ios-search" />
                            <Input
                                placeholder="Tìm kiếm"
                                onFocus={this.setFocus.bind(this, true)}
                                onBlur={this.setFocus.bind(this, false)}
                            />
                            <Icon name="ios-people" />
                        </Item>

                        <Button transparent>
                            <Text>Tìm kiếm</Text>
                        </Button>

                    </Header> */}
                    {
                        this.renderContent(this.props.routeName)
                    }
                <Footer>
                    <FooterTab style={{ backgroundColor: '#FFFFFF' /* #d7dbdf #dcdee0  */ }}>
                        <Button onPress={() => { this.onPressHome(1) }}
                            style={{ backgroundColor: this.state.activeHome ? '#d7dbdf' : '#FFFFFF' }}>
                            <Icon style={{ color: '#00c497' }} name="home" />
                            <Text style={{ color: '#00c497' }}>Trang chủ</Text>
                        </Button>
                        <Button onPress={() => { this.onPressHome(2) }}
                            style={{ backgroundColor: this.state.activeFavorite ? '#d7dbdf' : '#FFFFFF' }}>
                            <Icon style={{ color: '#00c497' }} name="heart" />
                            <Text style={{ color: '#00c497' }}>Sở thích</Text>
                        </Button>
                        <Button onPress={() => { this.onPressHome(3) }}
                            style={{ backgroundColor: this.state.activeProfile ? '#d7dbdf' : '#FFFFFF' }} >
                            <Icon style={{ color: '#00c497' }} name="person" />
                            <Text style={{ color: '#00c497' }}>Thông tin</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}


const mapStateToProps = function (state) {
    return { routeName: state.mainReducer.routeName }
}

export default connect(mapStateToProps, actionCreater)(MainScreen);
