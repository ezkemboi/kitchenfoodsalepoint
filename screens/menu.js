/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import axios from "axios";
import { Text, Icon, Container, Content } from "native-base";
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

  componentDidMount() {
    // console.log("I am just roaming here");
    axios
      .get("https://murmuring-peak-67663.herokuapp.com/products")
      .then(response => {
        const { data } = response.data;
        this.setState({
          products: data
        });
      })
      .catch(err => {
        console.log("------This is err ---------", err);
      });
  }

  handleDelete = () => {
    axios
      .get("https://murmuring-peak-67663.herokuapp.com/products/8")
      .then(response => {
        console.log("-------this is the response ------", response);
      })
      .catch(err => {
        console.log("--------err arised-----", err);
      });
    console.log("----I am clicked here--");
  };

  render() {
    const { products } = this.state;
    let allProducts;
    if (products) {
      allProducts = products.map((product, index) => {
        console.log("---These is product detail---", product);
        return (
          <View style={{ flexDirection: "row" }} key={index}>
            <Text style={{ color: "white", padding: 10 }} key={index}>
              {`${product.name} -------------------------------------------- £${
                product.price
              }`}{" "}
            </Text>
            <Icon
              type="FontAwesome"
              name="trash"
              key={product.id}
              style={{ padding: 10, fontSize: 20 }}
              onPress={this.handleDelete}
            />
          </View>
        );
      });
    }
    return (
      <Container>
        <Content style={{ flex: 1 }}>
          <LinearGradient
            colors={["#709BA5", "#1A707F"]}
            style={{ flex: 1, paddingTop: 20, paddingBottom: 100 }}
          >
            <TopButton />
            <LogoComponent />
            {!products || products.length < 1 ? (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size={80} color="white" />
              </View>
            ) : (
              allProducts.slice(0, 8)
            )}
            <BottomButton />
          </LinearGradient>
        </Content>
      </Container>
    );
  }
}
