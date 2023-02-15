import React from "react";
import { Box } from "@chakra-ui/react";
import TextFile from "../atom/text/text";

export function FirstHeading() {
  return (
    <>
      <Box ml="50px">
        <TextFile
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
