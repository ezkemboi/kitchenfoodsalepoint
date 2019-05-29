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
import {
  Text, Icon, Container,
  Content, Toast, Button,
  Card, CardItem, Thumbnail,
  Body, Grid, Col, Row,
  Header, Badge
} from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";
import food from '../food.png';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: "",
      cartItems: [],
      user: {}
    };
    // Get user details
    this.getItemToLocalStorage('user').then(response => {
      this.setState({
        user: response
      })
    }
    )
  }

  componentDidMount() {
    // Set user data so as to be used when adding items to cart
    this.getItemToLocalStorage('user').then(response => {
      this.setState({
        user: response
      })
    })
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

  // Method to get an item stored for user credentials
  getItemToLocalStorage = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return JSON.parse(value)
    } catch (err) {
      console.log('---------errror setting token----', err)
      return false
    }
  }

  handleAddToCart = productId => {
    /**
     * Determine the quantity required and userId
     * For now quantity taken is one
    */
    const user = this.state.user;
    console.log('------->>>>>>>', user.id)
    const cartProduct = {
      "userId": user.id,
      "product": {
        "productId": productId,
        "quantity": 1
      }
    }
    return axios.post("https://murmuring-peak-67663.herokuapp.com/cart", cartProduct).then(
      response => {
        const { data } = response.data;
        Toast.show({
          text: "Successfully added the product to cart",
          position: "top",
          buttonText: "Okay",
          type: "success",
          duration: 5000
        });
        console.log('--------data filtered--------', data)
      }
    ).catch(err => {
      console.log('This is the error from cart', err)
    })
  }

  render() {
    const { products, user } = this.state;
    if (user) {
      // // Collect items from user cart
      // axios.get(`https://murmuring-peak-67663.herokuapp.com/cart/${4}`).then(response => {
      //   const { data } = response.data
      //   this.setState({
      //     cartItems: data
      //   })
      // })

    }
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
                  onPress={() => this.handleAddToCart(product.id)}
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
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: "flex-end"
          }}
        >
          <Icon
            type="FontAwesome"
            name="cart-plus"
            onPress={() => this.props.navigation.navigate('Cart')}
          />
          <Badge>
            <Text>3</Text>
          </Badge>
        </View>

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
