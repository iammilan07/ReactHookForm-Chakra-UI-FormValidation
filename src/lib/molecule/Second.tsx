import React from "react";
import { Box, Input } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
import Buttoncom from "../atom/button/button";

const Second = () => {
  return (
    <Box
      //   p="20px"
      border="1px solid #B6BEC9"
      borderRadius="5px"
      bg="#FFFFFF 0% 0% no-repeat padding-box"
      //   pt="20px"
      ml="50px"
      mr="50px"
    >
      <Box>
        <Textfile
          padding="20px"
          bg="#e0e0e0"
          color="#1e90ff"
          fontSize="lg"
          fontWeight="600"
          name="Introduction"
        />
      </Box>
      <Box
        m="20px"
        display="flex"
        width="300px"
        justifyContent="space-between"
        marginTop="20px"
      >
        <Buttoncom
          width="80px"
          color="white"
          height="30px"
          borderRadius="20px"
          bg="#a9a9a9"
          name="Mr"
        />
        <Buttoncom
          width="80px"
          color="white"
          height="30px"
          borderRadius="20px"
          bg="#a9a9a9"
          name="Miss"
        />

        <Buttoncom
          width="80px"
          color="white"
          height="30px"
          borderRadius="20px"
          bg="#1e90ff"
          name=" Mrs"
        />
      </Box>
      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        width="700px"
        justifyContent="space-between"
      >
        <Box>
          <Textfile fontSize="md" name="First Name" />

          <Input />
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Textfile fontSize="md" name="Middle Name" />
            <Textfile color="grey" fontSize="sm" name="optional" />
          </Box>
          <Input />
        </Box>
        <Box>
          <Textfile fontSize="md" name="Last Name" />
          <Input />
        </Box>
      </Box>

      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        width="700px"
        justifyContent="space-between"
      >
        <Box width="470px">
          <Box display="flex" justifyContent="space-between">
            <Textfile fontSize="lg" name="नाम (नेपालीमा)" />
            <Textfile color="grey" fontSize="sm" name="optional" />
          </Box>
          <Input />
        </Box>
      </Box>

      <Box
        m="20px"
        marginTop="20px"
        display="flex"
        width="700px"
        justifyContent="space-between"
      >
        <Box width="300px" height="100px">
          <Input type="file" />
        </Box>
      </Box>
    </Box>
  );
};

export default Second;
