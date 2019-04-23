import React, { Component } from "react";
import axios from "axios";
import {
  Form,
  Item,
  Input,
  Label,
  Container,
  Content,
  Button,
  Text,
  Toast
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";

// Sign up screen and components
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      firstName: "",
      surname: ""
    };
  }

  // Handle submit of registration
  handleSubmitRegistration = () => {
    console.log("This is othere");
    axios
      .post("https://murmuring-peak-67663.herokuapp.com/register", this.state)
      .then(response => {
        console.log("------response-----", response);
        Toast.show({
          text: "Successfully registered",
          position: "top",
          buttonText: "Okay",
          type: "success",
          duration: 2000
        });
        this.props.navigation.navigate("Login");
      })
      .catch(err => {
        console.log("------err while registering----->>>>", err);
        Toast.show({
          text: "An error occurred while registering",
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
            style={{ paddingTop: 20, paddingBottom: 100 }}
          >
            <TopButton />
            <LogoComponent />
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={firstName => this.setState({ firstName })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Surname</Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={surname => this.setState({ surname })}
                />
              </Item>
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
                onPress={this.handleSubmitRegistration}
              >
                <Text>Sign Up</Text>
              </Button>
            </Form>
          </LinearGradient>
        </Content>
      </Container>
    );
  }
}
