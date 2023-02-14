import React from "react";
import { Box } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
/* eslint-disable-next-line */
export interface FistheadingProps {}

export function Fistheading(props: FistheadingProps) {
  return (
    <>
      <Box p="20px">
        <Textfile fontSize="lg" fontWeight="500" name="Add Employee" />
      </Box>
    </>
  );
}

export default Fistheading;
