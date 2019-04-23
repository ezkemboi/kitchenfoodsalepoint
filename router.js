import { createStackNavigator, createAppContainer } from "react-navigation";
import Menu from "./screens/menu";

const AppNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default createAppContainer(AppNavigator);
