import React from "react";
import { Box } from "@chakra-ui/react";
import TextFile from "../atom/text/text";

const AdditionalInformation = (props: any) => {
  const { register, errors } = props;

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
          <TextFile
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
            <TextFile fontSize="md" name="Date of Birth" />
            <input
              type="date"
              style={{
                width: "300px",
                padding: "10px",
                color: "black",
                height: "40px",
                borderRadius: "7px",
                border: "1px solid black",
              }}
              {...register("dateOfBirth", { required: true, maxLength: 20 })}
            />
            {errors?.dateOfBirth?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )}
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
            <TextFile fontSize="md" name="Father's Name" />
            <input
              placeholder="Add your Father's Name"
              style={{
                width: "300px",
                padding: "10px",
                color: "black",
                height: "40px",
                borderRadius: "7px",
                border: "1px solid black",
              }}
              {...register("fathername", { required: true, maxLength: 20 })}
            />
            {errors?.fathername?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )}
          </Box>

          <Box width="300px">
            <TextFile fontSize="md" name="Mother's Name" />
            <input
              placeholder="Add your First Name"
              style={{
                width: "300px",
                padding: "10px",
                color: "black",
                height: "40px",
                borderRadius: "7px",
                border: "1px solid black",
              }}
              {...register("mothername", { required: true, maxLength: 20 })}
            />
            {errors?.mothername?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )}
          </Box>
        </Box>
        <Box width="300px" m="20px" marginTop="20px">
          <Box display="flex" justifyContent="space-between">
            <TextFile fontSize="md" name="Martial Status" />
            <TextFile color="grey" fontSize="sm" name="optional" />
          </Box>
          <select
            placeholder="Select Status"
            style={{
              width: "300px",
              padding: "10px",
              color: "black",
              height: "40px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
            {...register("martialStatus")}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </Box>
      </Box>
    </Box>
  );
};

export default AdditionalInformation;
