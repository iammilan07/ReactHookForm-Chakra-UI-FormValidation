import React from "react";
import { Box, HStack, Checkbox } from "@chakra-ui/react";
import TextFile from "../atom/text/text";

const Contact = (props: any) => {
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
          name="Contact"
        />
      </Box>
      <HStack>
        <Box width="300px" m="20px" marginTop="20px">
          <TextFile fontSize="md" name="Mobile Number" />

          <input
            type="text"
            placeholder="Add Your Mobile Number"
            style={{
              width: "300px",
              padding: "10px",
              color: "black",
              height: "40px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
            {...register("mobilenumber", { required: true, maxLength: 20 })}
          />
          {errors?.mobilenumber?.type === "required" && (
            <p style={{ color: "red" }}>This field is required!! ⚠</p>
          )}
        </Box>

        <Box width="300px" m="20px" marginTop="20px">
          <TextFile fontSize="md" name="Personal e-mail" />

          <input
            type="email"
            placeholder="Add your E-Mail Id"
            style={{
              width: "300px",
              padding: "10px",
              color: "black",
              height: "40px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
            {...register("personalEmail", { required: true, maxLength: 20 })}
          />
          {errors?.personalEmail?.type === "required" && (
            <p style={{ color: "red" }}>This field is required!! ⚠</p>
          )}
        </Box>

        <Box width="300px" m="20px" marginTop="20px">
          <Box display="flex" justifyContent="space-between">
            <TextFile fontSize="md" name="Office e-mail" />
            <TextFile color="grey" fontSize="sm" name="optional" />
          </Box>
          <input
            type="email"
            placeholder="Add your Office E-Mail Id"
            style={{
              padding: "10px",
              width: "300px",
              color: "black",
              height: "40px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
            {...register("officeEmailId", { required: false, maxLength: 20 })}
          />
        </Box>
      </HStack>
      <Box
        width="300px"
        m="20px"
        marginTop="20px"
        {...register("checkBox", { required: true })}
      >
        <Checkbox colorScheme="blue" defaultChecked>
          Do not Create Onboarding Package
        </Checkbox>
      </Box>
      {errors?.checkBox?.type === "required" && (
        <p style={{ color: "red" }}>This field is required!! ⚠</p>
      )}
    </Box>
  );
};

export default Contact;
