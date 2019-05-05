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
import { Text, Icon, Container, Content, Button } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: ""
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

  // Update the details of the product when user updates the data
  componentDidUpdate() {
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

  handleDelete = id => {
    axios
      .delete(`https://murmuring-peak-67663.herokuapp.com/products/${id}`)
      .then(response => {
        console.log("-------this is the response ------", response);
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
      })
      .catch(err => {
        console.log("--------err arised-----", err);
      });
  };

  render() {
    const { products } = this.state;
    let allProducts;
    if (products) {
      allProducts = products.map((product, index) => {
        return (
          <View style={{ flexDirection: "row", width: "100%" }} key={index}>
            <Text style={{ color: "white", width: "40%", padding: 10 }}>{`${
              product.name
            }`}</Text>
            <Text style={{ color: "white", width: "30%", padding: 10 }}>
              -----------------
            </Text>
            <Text style={{ color: "white", width: "20%", padding: 10 }}>
              {`£${product.price}`}
            </Text>
            <Icon
              type="FontAwesome"
              name="trash"
              key={product.id}
              style={{
                padding: 10,
                fontSize: 20,
                width: "10%"
              }}
              onPress={() => this.handleDelete(product.id)}
            />
          </View>
        );
      });
    }
    return (
      <LinearGradient
        colors={["#709BA5", "#1A707F"]}
        style={{
          height: "auto",
          minHeight: "100%",
          paddingTop: 20
        }}
      >
        <Content style={{ minHeight: "100%" }}>
          <TopButton />
          <LogoComponent />
          {!products || products.length < 1 ? (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size={80} color="white" />
            </View>
          ) : (
            allProducts.slice(0, 12)
          )}
          <Button
            transparent
            light
            style={{
              alignSelf: "center",
              borderRadius: 15,
              borderWidth: 2,
              borderColor: "white",
              paddingRight: 40,
              paddingLeft: 40,
              position: "relative",
              marginBottom: 20
            }}
            onPress={() => this.props.navigation.navigate("AddBucket")}
          >
            <Text>Add to Basket</Text>
          </Button>
        </Content>
      </LinearGradient>
    );
  }
}
