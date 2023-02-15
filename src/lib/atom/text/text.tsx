import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

interface ITextFile extends TextProps {
  name: any;
}
const TextFile = (props: ITextFile) => {
  const { name, ...rest } = props;
  return <Text {...rest}>{name}</Text>;
};
export default TextFile;
