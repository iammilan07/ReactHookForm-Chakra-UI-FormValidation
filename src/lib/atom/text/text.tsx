import styles from './text.module.scss';
import React from 'react';
import { Text } from "@chakra-ui/react";


export function Textfile(props: any) {
  return (
    <Text
      textAlign={props.textAlign}
      opacity={props.opacity}
      border={props.border}
      borderColor={props.borderColor}
      borderRadius={props.borderRadius}
      as={props.as}
      paddingLeft={props.pl}
      color={props.color}
      paddingBottom={props.paddingBottom}
      fontSize={props.fontSize}
      paddingRight={props.paddingRight}
      fontWeight={props.fontWeight}
      padding={props.padding}
      bg={props.bg}
      paddingTop={props.pT}

    >
      {props.name}
    </Text>
  );
}

export default Textfile;
