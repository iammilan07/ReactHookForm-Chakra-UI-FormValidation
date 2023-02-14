import React from "react";
import { Box, Input, Select } from "@chakra-ui/react";
import Textfile from "../atom/text/text";

const Additionalinformation = () => {
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
          name="Additional Information"
        />
      </Box>
      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        width="700px"
        justifyContent="space-between"
      >
        <Box width="300px">
          <Textfile fontSize="md" name="Date of Birth" />
          <Input type="date" />
        </Box>
      </Box>

      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        justifyContent="space-between"
        width="620px"
      >
        <Box width="300px">
          <Textfile fontSize="md" name="Father's Name" />
          <Input />
        </Box>
        <Box width="300px">
          <Textfile fontSize="md" name="Mother's Name" />
          <Input />
        </Box>
      </Box>
      <Box width="300px" m="20px" marginTop="20px">
        <Box display="flex" justifyContent="space-between">
          <Textfile fontSize="md" name="Martial Status" />
          <Textfile color="grey" fontSize="sm" name="optional" />
        </Box>
        <Select placeholder="select option">
          <option value="option1">Single</option>
          <option value="option2">Married</option>
        </Select>
      </Box>
    </Box>
  );
};

export default Additionalinformation;
