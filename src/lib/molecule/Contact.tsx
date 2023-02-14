import React from "react";
import { Box, HStack, Input, Checkbox } from "@chakra-ui/react";
import Textfile from "../atom/text/text";

const Contact = () => {
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
          name="Contact"
        />
      </Box>
      <HStack>
        <Box width="300px" m="20px" marginTop="20px">
          <Textfile fontSize="md" name="Mobile Number" />

          <Input type="text" />
        </Box>

        <Box width="300px" m="20px" marginTop="20px">
          <Textfile fontSize="md" name="Personal e-mail" />

          <Input type="text" />
        </Box>

        <Box width="300px" m="20px" marginTop="20px">
          <Box display="flex" justifyContent="space-between">
            <Textfile fontSize="md" name="Office e-mail" />
            <Textfile color="grey" fontSize="sm" name="optional" />
          </Box>
          <Input type="text" />
        </Box>
      </HStack>
      <Box width="300px" m="20px" marginTop="20px">
        <Checkbox colorScheme="blue" defaultChecked>
          Do not Create Onboarding Package
        </Checkbox>
      </Box>
    </Box>
  );
};

export default Contact;
