// Button shown at the top of the screen
import React from "react";
import { Button, Text } from "native-base";

const TopButton = props => {
  return (
    <Button
      transparent
      light
      style={{
        alignSelf: "center",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "white",
        paddingRight: 70,
        paddingLeft: 70
      }}
    >
      <Text>Menu</Text>
    </Button>
  );
};

export default TopButton;
