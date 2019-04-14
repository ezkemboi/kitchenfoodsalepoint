// Logo reusable
import React from "react";
import { Image } from "react-native";
import logo from "../logo.png";

// Logo component to import in any instance where required
const LogoComponent = () => {
  return (
    <Image
      source={logo}
      style={{
        height: 150,
        width: 150,
        marginTop: 10,
        alignSelf: "center"
      }}
    />
  );
};

export default LogoComponent;
