import React from "react";
import { Box } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
/* eslint-disable-next-line */
export interface FistheadingProps {}

export function Fistheading(props: FistheadingProps) {
  return (
    <>
      <Box ml="50px" mr="400px">
        <Textfile
          padding="20px"
          fontSize="lg"
          fontWeight="500"
          name="Add Employee"
        />
      </Box>
    </>
  );
}

export default Fistheading;
