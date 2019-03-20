import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Container, List, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
const COFFEE_IMAGE = require('../images/coffee-cup.jpg');
const COFFEE_IMAGE_ITEM1 = require('../images/mia-garden-coffee.jpg');
const COFFEE_IMAGE_ITEM2 = require('../images/oz-coffee-house.jpg');
export default class MainSreenSub1 extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  render() {
    return (
      <Container>
        <ScrollView>
            <Card style={{margin: 10}}>
              <CardItem>
                <Left>
                  <Thumbnail source={COFFEE_IMAGE} />
                  <Body >
                    <Text>MiA Garden Coffee - Quán cafe đẹp ở quận 2</Text>
                    <Text note>mhaik36</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={COFFEE_IMAGE_ITEM1} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Luợt thích</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Bình luận</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>1 giờ trước</Text>
                </Right>
              </CardItem>
            </Card>
            <Card style={{margin: 10}}>
              <CardItem>
                <Left>
                  <Thumbnail source={COFFEE_IMAGE} />
                  <Body>
                    <Text>Oz Coffee House 2 - Quán cafe đẹp tại quận 3</Text>
                    <Text note>mhaik36</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={COFFEE_IMAGE_ITEM2} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>15 Luợt thích</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>5 Bình luận</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>2 giờ trước</Text>
                </Right>
              </CardItem>
            </Card>
            <Card style={{margin: 10}}>
              <CardItem>
                <Left>
                  <Thumbnail source={COFFEE_IMAGE} />
                  <Body>
                    <Text>Oz Coffee House 2 - Quán cafe đẹp tại quận 3</Text>
                    <Text note>mhaik36</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={COFFEE_IMAGE_ITEM2} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>15 Luợt thích</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>5 Bình luận</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>2 giờ trước</Text>
                </Right>
              </CardItem>
            </Card>
        </ScrollView>
      </Container>
    )
  }
}
