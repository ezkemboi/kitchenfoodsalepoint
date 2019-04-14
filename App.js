/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <LinearGradient
          colors={["#709BA5", "#1A707F"]}
          style={{ flex: 1, paddingTop: 20 }}
        >
          <Button
            transparent
            light
            style={{
              alignSelf: "center",
              borderRadius: 15,
              borderWidth: 2,
              borderColor: "white",
              paddingRight: 60,
              paddingLeft: 60
            }}
          >
            <Text>Menu</Text>
          </Button>
          <Text style={styles.welcome}>This is text</Text>
          <Button
            transparent
            light
            style={{
              alignSelf: "center",
              borderRadius: 15,
              borderWidth: 2,
              borderColor: "white",
              paddingRight: 30,
              paddingLeft: 30,
              position: "absolute",
              bottom: 40
            }}
          >
            <Text>Add to Basket</Text>
          </Button>
        </LinearGradient>
      </Container>
    );
  }
}

// 090d0e   jini   juu 709BA5   ... f6f7f7

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  button: {
    width: 200
  }
});
