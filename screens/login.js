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
  Toast,
  View
} from "native-base";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from '@react-native-community/async-storage';

import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";
import setItemToLocalStorage from '../helpers/setlocalstorage';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
      },
      storedData: {}
    };
  }

  componentDidMount() {
    // Get user details 
    this.getItemToLocalStorage('user').then(response => {
      // Try send user to menu if they have ever logged in
      if (response.id) {
        this.props.navigation.navigate("Menu");
      }
    })
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

  // Handle submit of login
  handleLoginSubmision = () => {
    const { user } = this.state;
    console.log('This is state of the login functionality', user)
    axios
      .post("https://murmuring-peak-67663.herokuapp.com/login", user)
      .then(response => {
        // Save login items to local storage
        const { user } = response.data

        Toast.show({
          text: "Successfully logged in",
          position: "top",
          buttonText: "Okay",
          type: "success",
          duration: 2000
        });
        this.props.navigation.navigate("Menu");
        // Save user detals to local storage
        return setItemToLocalStorage('user', user)
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
              <Text
                style={{
                  paddingTop: 50,
                  textAlign: "center"
                }}
              >
                Don't have any account?
              </Text>
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
                  marginTop: 15
                }}
                onPress={() => this.props.navigation.push('SignUp')}
              >
                <Text>Create Account</Text>
              </Button>
            </Form>
          </LinearGradient>
        </Content>
      </Container>
    );
  }
}
