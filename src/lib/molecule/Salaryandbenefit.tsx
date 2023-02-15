import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
import Buttoncom from "../atom/button/button";
import { useForm } from "react-hook-form";
const SalaryAndBenefit = (props: any) => {
  const { register } = props;
  const {
    // register,

    formState: { errors },
  } = useForm();
  return (
    <Box>
      <Box
        mt="10px"
        border="1px solid #B6BEC9"
        borderRadius="5px"
        bg="#FFFFFF 0% 0% no-repeat padding-box"
        ml="50px"
        width="60%"
      >
        <Box>
          <Textfile
            padding="20px"
            bg="#e8e8e8"
            color="#1e90ff"
            fontSize="lg"
            fontWeight="600"
            name="Salary and Benefits"
          />
        </Box>

        <HStack>
          <Box width="300px" m="20px" marginTop="20px">
            <Box display="flex" justifyContent="space-between">
              <Textfile fontSize="md" name="Salary template" />
              <Textfile color="grey" fontSize="sm" name="optional" />
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
              {...register("salaryTemplate", { required: true, maxLength: 20 })}
            >
              <option value="option1">Assistant Finance Manager</option>
              <option value="option2">Indirect Hire</option>
            </select>
            {errors?.salaryTemplate?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )}
          </Box>
          <Box width="300px" display="flex" justifyContent="space-between">
            <Textfile name="Gross pay" />
            <Textfile name="Rs. 50,000.00" />
            <Buttoncom name="Review" color="blue" />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default SalaryAndBenefit;
