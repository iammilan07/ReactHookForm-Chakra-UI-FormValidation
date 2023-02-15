import { Button } from "@chakra-ui/react";
import React from "react";

const Buttoncom = (props: any) => {
  return (
    <Button
      type={props.type}
      border={props.border}
      borderColor={props.borderColor}
      p={props.p}
      bg={props.bg}
      height={props.height}
      width={props.width}
      color={props.color}
      borderRadius={props.borderRadius}
    >
      {props.name}
    </Button>
  );
};

export default Buttoncom;
