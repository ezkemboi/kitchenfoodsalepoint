import { createStackNavigator, createAppContainer } from "react-navigation";
import Menu from "./screens/menu";
import SignUp from "./screens/signup";
import Login from "./screens/login";

const AppNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: () => ({
        header: null
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "SignUp"
  }
);

export default createAppContainer(AppNavigator);
