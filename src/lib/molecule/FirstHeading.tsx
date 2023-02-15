import React from "react";
import { Box } from "@chakra-ui/react";
import Textfile from "../atom/text/text";

export function FirstHeading() {
  return (
    <>
      <Box ml="50px">
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

export default FirstHeading;
