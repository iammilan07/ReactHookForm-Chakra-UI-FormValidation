import { Box } from "@chakra-ui/react";
import React from "react";

const Boxcomp = (props: any) => {
  return (
    <>
      <Box
        border="1px solid #B6BEC9"
        borderRadius="5px"
        bg="#FFFFFF 0% 0% no-repeat padding-box"
        top="322px"
        left="62px"
        pt="20px"
        pl="50px"
        color={props.color}
      >
        {props.name}
      </Box>
    </>
  );
};

export default Boxcomp;
