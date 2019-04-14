// Button shown at the bottom of the screen
import React from "react";
import { Button, Text } from "native-base";

const BottomButton = props => {
  return (
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
        position: "absolute",
        bottom: 40
      }}
    >
      <Text>Add to Basket</Text>
    </Button>
  );
};

export default BottomButton;
