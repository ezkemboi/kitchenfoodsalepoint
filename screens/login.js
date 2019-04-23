// Login screen
import React, { Component } from "react";
import { Form, Label, Input, Item } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";
import BottomButton from "../components/bottombutton";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // Handle change of values
  handleValueChange = () => {
    console.log("I have changed");
  };

  // Handle submit of login
  handleLoginSubmision = () => {
    console.log("I have submitted form");
  };

  render() {
    return (
      <LinearGradient
        colors={["#709BA5", "#1A707F"]}
        style={{ flex: 1, paddingTop: 20 }}
      >
        <TopButton />
        <LogoComponent />
        <Form>
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
    );
  }
}
