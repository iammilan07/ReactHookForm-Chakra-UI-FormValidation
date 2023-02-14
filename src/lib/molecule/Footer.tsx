import React from "react";
import { Box } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
import Buttoncom from "../atom/button/button";

export function Footer() {
  return (
    <>
      <Box mt="10px" ml="50px" mr="400px">
        <Box alignItems="right" textAlign="right">
          <Buttoncom bg="#fff" name="cancel" />
          <Buttoncom bg="#1e90ff" name="Save" />
        </Box>
      </Box>
    </>
  );
}
