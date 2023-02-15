import React from "react";
import { Box } from "@chakra-ui/react";
import Buttoncom from "../atom/button/button";

export function Footer() {
  return (
    <>
      <Box mt="10px" ml="50px" width="60%">
        <Box alignItems="right" textAlign="right">
          <Buttoncom bg="#fff" border="1px solid black" name="cancel" />
          <Buttoncom
            ml="20px"
            type="submit"
            bg="#1e90ff"
            border="1px solid black"
            name="Save"
          />
        </Box>
      </Box>
    </>
  );
}
