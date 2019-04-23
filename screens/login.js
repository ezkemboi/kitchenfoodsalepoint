// Login screen
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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // Handle submit of login
  handleLoginSubmision = () => {
    axios
      .post("https://murmuring-peak-67663.herokuapp.com/login", this.state)
      .then(response => {
        console.log("------response-----", response);
        Toast.show({
          text: "Successfully logged in",
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
          text: "An error occurred while logging in",
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
                <Label>Username</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={password => this.setState({ password })}
                  secureTextEntry={true}
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
                onPress={this.handleLoginSubmision}
              >
                <Text>Login</Text>
              </Button>
            </Form>
          </LinearGradient>
        </Content>
      </Container>
    );
  }
}
