// Login screen
import React, { Component } from "react";
import { Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import LogoComponent from "../components/logo";
import TopButton from "../components/topbutton";
import BottomButton from "../components/bottombutton";

export default class Login extends Component {
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
  render() {
    return (
      <LinearGradient
        colors={["#709BA5", "#1A707F"]}
        style={{ flex: 1, paddingTop: 20 }}
      >
        <TopButton />
        <LogoComponent />
        <Text>Login page</Text>
        <BottomButton />
      </LinearGradient>
    );
  }
}
