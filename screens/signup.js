import React, { Component } from "react";
import { Form, Item, Input, Label, Container } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";
import BottomButton from "../components/bottombutton";

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

  // Change of input values
  handleOnChange = () => {
    console.log("I have changes");
  };

  // Handle submit of registration
  handleSubmitRegistration = () => {
    console.log("I am now submitting my registration");
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <LinearGradient
          colors={["#709BA5", "#1A707F"]}
          style={{ flex: 1, paddingTop: 20 }}
        >
          <TopButton />
          <LogoComponent />
          <Form>
            <Item fixedLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Surname</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <BottomButton />
        </LinearGradient>
      </Container>
    );
  }
}
