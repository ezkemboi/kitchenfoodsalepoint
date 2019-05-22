/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ActivityIndicator, View, Image } from "react-native";
import axios from "axios";
import { Text, Icon, Container, Content, Button, Card, CardItem, Thumbnail, Body, Grid, Col, Row } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";
import food from '../food.png';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: ""
    };
  }

  componentDidMount() {
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

  handleAddToCart = () => {
    console.log('This is my add cart')
    const cartProduct = {
      "userId": 1,
      "product": {
        "productId": 1,
        "quantity": 2
      }
    }
    return axios.post("https://murmuring-peak-67663.herokuapp.com/cart", cartProduct).then(
      response => {
        console.log('--------This is response---------', response)
      }
    ).catch(err => {
      console.log('This is the error from cart', err)
    })
  }

  handleDelete = id => {
    return axios
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
          <Card key={index + 1}>
            <CardItem>
              <Thumbnail source={food} />
              <Body>
                <Text>{product.name}</Text>
                <Text note>Stuffed with Callaloo</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={food} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Text style={{ textAlignVertical: "center" }}>Price: € {product.price}.00</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  full success
                  key={product.id}
                  onPress={() => this.handleAddToCart()}
                >
                  <Text>Add To Cart</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
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

          <Grid>
            <Row>
              <Col>
                {!products || products.length < 1 ? (
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size={80} color="white" />
                  </View>
                ) : (
                    allProducts
                  )}
              </Col>
            </Row>
          </Grid>
        </Content>
      </LinearGradient>
    );
  }
}
