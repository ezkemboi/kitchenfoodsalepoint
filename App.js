// Calling the main app here
import React from "react";
import { Root } from "native-base";
import AppNavigator from "./router";

const App = () => (
  <Root>
    <AppNavigator />
  </Root>
);

export default App;
