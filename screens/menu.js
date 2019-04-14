/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";
import BottomButton from "../components/bottombutton";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    const productName = "Pawn N Mac";
    const productPrice = "£7.00";
    return (
      <LinearGradient
        colors={["#709BA5", "#1A707F"]}
        style={{ flex: 1, paddingTop: 20 }}
      >
        <TopButton />
        <LogoComponent />

        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------ ${productPrice}`}
        </Text>
        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------ ${productPrice}`}
        </Text>
        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------ ${productPrice}`}
        </Text>
        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------ ${productPrice}`}
        </Text>
        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------- ${productPrice}`}
        </Text>
        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------ ${productPrice}`}
        </Text>
        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------ ${productPrice}`}
        </Text>
        <Text style={{ color: "white", padding: 10 }}>
          {`${productName} ------------------------------------------------------ ${productPrice}`}
        </Text>

        <BottomButton />
      </LinearGradient>
    );
  }
}
