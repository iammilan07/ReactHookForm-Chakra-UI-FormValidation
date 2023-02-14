import React from "react";
import { Box, Input, Select } from "@chakra-ui/react";
import Textfile from "../atom/text/text";

const Appointment = () => {
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
          name="Appointment"
        />
      </Box>
      <Box width="300px" m="20px" marginTop="20px">
        <Box display="flex" justifyContent="space-between">
          <Textfile fontSize="md" name="Hiring Method" />
          <Textfile color="grey" fontSize="sm" name="optional" />
        </Box>
        <Select placeholder="select option">
          <option value="option1">Direct Hire</option>
          <option value="option2">Indirect Hire</option>
        </Select>
      </Box>
      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        width="700px"
        justifyContent="space-between"
      >
        <Box>
          <Textfile fontSize="md" name="Appointment date" />

          <Input type="date" />
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Textfile fontSize="md" name="Appointment Letter Number" />
            <Textfile color="grey" fontSize="sm" name="optional" />
          </Box>
          <Input />
        </Box>
        <Box>
          <Textfile fontSize="md" name="Appointment Letter Date" />
          <Input type="date" />
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
