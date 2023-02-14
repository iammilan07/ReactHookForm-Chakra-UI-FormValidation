import React from "react";
import { Box, Input, Select } from "@chakra-ui/react";
import Textfile from "../atom/text/text";

const Jobandplacement = () => {
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
          name="Job and Placement"
        />
      </Box>
      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        justifyContent="space-between"
        width="620px"
      >
        <Box width="300px">
          <Textfile fontSize="md" name="Level" />
          <Box>
            <Select placeholder="select option">
              <option value="option1">Kathmandu</option>
              <option value="option2">Pokhara</option>
            </Select>
          </Box>
        </Box>
        <Box width="300px">
          <Textfile fontSize="md" name="Position" />
          <Box>
            <Select placeholder="select option">
              <option value="option1">Assistant Finance Manager</option>
              <option value="option2">Assistance Developer</option>
            </Select>
          </Box>
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
          <Textfile fontSize="md" name="Job Status" />
          <Box>
            <Select placeholder="select option">
              <option value="option1">Probation</option>
              <option value="option2">Pokhara</option>
            </Select>
          </Box>
        </Box>
        <Box width="300px">
          <Textfile fontSize="md" name="Position" />
          <Input type="date" />
        </Box>
      </Box>

      <Box width="300px" m="20px" marginTop="20px">
        <Box display="flex" justifyContent="space-between">
          <Textfile fontSize="md" name="Unit" />
          <Textfile color="grey" fontSize="sm" name="optional" />
        </Box>
        <Select placeholder="select option">
          <option value="option1">Kathmandu</option>
          <option value="option2">Jhapa</option>
        </Select>
      </Box>

      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        justifyContent="space-between"
        width="620px"
      >
        <Box width="300px">
          <Textfile fontSize="md" name="Branch" />
          <Box>
            <Select placeholder="select option">
              <option value="option1">Kathmandu</option>
              <option value="option2">Pokhara</option>
            </Select>
          </Box>
        </Box>
        <Box width="300px">
          <Textfile fontSize="md" name="Department" />
          <Box>
            <Select placeholder="select option">
              <option value="option1">Finance</option>
              <option value="option2">Developer</option>
            </Select>
          </Box>
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
          <Textfile fontSize="md" name="Unit or Subdepartment" />
          <Box>
            <Select placeholder="">
              <option value="option1">Kathmandu</option>
              <option value="option2">Pokhara</option>
            </Select>
          </Box>
        </Box>
        <Box width="300px">
          <Textfile fontSize="md" name="Location" />
          <Box>
            <Select placeholder="">
              <option value="option1">Assistant Finance Manager</option>
              <option value="option2">Assistance Developer</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Jobandplacement;
