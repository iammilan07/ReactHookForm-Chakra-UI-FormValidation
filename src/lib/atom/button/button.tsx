import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface IButtonCom extends ButtonProps {
  name: string;
}

const ButtonCom = (props: IButtonCom) => {
  const { name, ...rest } = props;
  return <Button {...rest}>{name}</Button>;
};

export default ButtonCom;
