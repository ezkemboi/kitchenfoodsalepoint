// Add product form
import React, { Component } from "react";
import {
  Form,
  Label,
  Input,
  Item,
  Container,
  Content,
  Button,
  Text,
  Toast
} from "native-base";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";

export default class AddBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }

  // Handle submit of login
  handleAddBucket = () => {
    console.log("I am already here");
    console.log("----this is my state----", this.state);
    axios
      .post("https://murmuring-peak-67663.herokuapp.com/products", this.state)
      .then(response => {
        console.log("------response-----", response);
        Toast.show({
          text: "Successfully added product",
          position: "top",
          buttonText: "Okay",
          type: "success",
          duration: 2000
        });
        this.props.navigation.navigate("Menu");
      })
      .catch(err => {
        console.log("------err while registering----->>>>", err);
        Toast.show({
          text: "An error occurred while adding product",
          position: "top",
          buttonText: "Okay",
          type: "danger",
          duration: 2000
        });
      });
  };

  render() {
    return (
      <Container>
        <Content style={{ flex: 1 }}>
          <LinearGradient
            colors={["#709BA5", "#1A707F"]}
            style={{ flex: 1, paddingTop: 20, paddingBottom: 300 }}
          >
            <TopButton />
            <LogoComponent />
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={name => this.setState({ name })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Price</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={price => this.setState({ price })}
                />
              </Item>
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
                  marginTop: 50
                }}
                onPress={this.handleAddBucket}
              >
                <Text>Add Product</Text>
              </Button>
            </Form>
          </LinearGradient>
        </Content>
      </Container>
    );
  }
}
