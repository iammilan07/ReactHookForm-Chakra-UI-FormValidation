import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import TextFile from "../atom/text/text";
import Buttoncom from "../atom/button/button";

const Leaves = (props: any) => {
  const { register, errors } = props;
  return (
    <Box
      mt="10px"
      border="1px solid #B6BEC9"
      borderRadius="5px"
      bg="#FFFFFF 0% 0% no-repeat padding-box"
      ml="50px"
      width="60%"
    >
      <Box>
        <TextFile
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
            <TextFile fontSize="md" name="Leaves template" />
            <TextFile color="grey" fontSize="sm" name="optional" />
          </Box>
          <select
            placeholder="select option"
            style={{
              padding: "10px",
              color: "black",
              height: "40px",
              borderRadius: "7px",
              border: "1px solid black",
              width: "300px",
            }}
            {...register("leaveTemplate", { required: true, maxLength: 20 })}
          >
            <option value="option1">Permanent</option>
            <option value="option2">Temporary</option>
          </select>
          {errors?.leaveTemplate?.type === "required" && (
            <p style={{ color: "red" }}>This field is required!! ⚠</p>
          )}
        </Box>

        <Buttoncom name="Review" color="blue" />
      </HStack>
    </Box>
  );
};

export default Leaves;
