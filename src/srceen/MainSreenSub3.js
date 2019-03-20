
import React, { Component } from 'react';
import { Image, ScrollView } from "react-native";
import { Container, Right, Left, Body, Button, Icon, Title, Content, Card, CardItem, View, Text } from 'native-base';
const COFFEE_IMAGE = require('../images/coffee-cup.jpg');
const COFFEE_IMAGE_ITEM1 = require('../images/mia-garden-coffee.jpg');

export default class MainSreenSub3 extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [1, 2, 3, 4, 5] }
  }

  render() {
    return (
      // <Container>
      //   <ScrollView>
      //     <Card  style={{ marginTop: '2%', marginLeft: '2%', marginRight: '2%', marginBottom: '2%' }}>
      //       <CardItem>
      //         <Image source={{ uri: "https://nativebase.io/assets/img/front-page-icon.png" }}
      //           style={{ height: 200, width: null, flex: 1 }} />
      //       </CardItem>
      //       <CardItem>
      //         <Left>
      //           <View style={{ height: '50%' }}>
      //             <Text style={{ fontSize: 15 }}>Jun</Text>
      //             <Text style={{ fontSize: 15 }}>15</Text>
      //           </View>
      //         </Left>
      //         <Body style={{ alignSelf: 'flex-start', marginLeft: '-50%' }}>
      //           <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Title</Text>
      //           <Text note>Description 1</Text>
      //         </Body>
      //       </CardItem>
      //     </Card>
      //   </ScrollView>
      // </Container>
      <Container>
        <ScrollView>
          {this.state.events.map(events => {
            return (
              <Card key={events} style={{ margin: 10 }}>
                <CardItem>
                  <Left>
                    {/* <Thumbnail source={COFFEE_IMAGE} /> */}
                    <Body >
                      <Text>Nativebase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={COFFEE_IMAGE_ITEM1} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                  <Left>
                    <View style={{ height: '50%' }}>
                      <Text style={{ fontSize: 15 }}>Jun</Text>
                      <Text style={{ fontSize: 15 }}>15</Text>
                    </View>
                  </Left>
                  <Body style={{ alignSelf: 'flex-start', marginLeft: '-50%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Title</Text>
                    <Text note>Description {events}</Text>
                  </Body>
                </CardItem>
              </Card>
            )
          })}
        </ScrollView>
      </Container>
    );
  }
}