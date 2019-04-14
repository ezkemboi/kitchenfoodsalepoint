// Calling the main app here
import React, { Component } from "react";
import { Container } from "native-base";
import Menu from "./screens/menu";
import SignUp from "./screens/signup";
import Login from "./screens/login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Menu />
        {/* <SignUp /> */}
        {/* <Login /> */}
      </Container>
    );
  }
}
