import React from "react";
import { Box, HStack, Select } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
import Buttoncom from "../atom/button/button";

const Leaves = () => {
  return (
    <Box
      mt="10px"
      border="1px solid #B6BEC9"
      borderRadius="5px"
      bg="#FFFFFF 0% 0% no-repeat padding-box"
      ml="50px"
      mr="400px"
    >
      <Box>
        <Textfile
          padding="20px"
          bg="#e8e8e8"
          color="#1e90ff"
          fontSize="lg"
          fontWeight="600"
          name="Leaves"
        />
      </Box>

      <HStack>
        <Box width="300px" m="20px" marginTop="20px">
          <Box display="flex" justifyContent="space-between">
            <Textfile fontSize="md" name="Leaves template" />
            <Textfile color="grey" fontSize="sm" name="optional" />
          </Box>
          <Select placeholder="select option">
            <option value="option1">Permanent</option>
            <option value="option2">Temporary</option>
          </Select>
        </Box>

        <Buttoncom name="Review" color="blue" />
      </HStack>
    </Box>
  );
};

export default Leaves;
