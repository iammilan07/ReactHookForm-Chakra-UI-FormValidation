import React from "react";
import { Box } from "@chakra-ui/react";
import TextFile from "../atom/text/text";

const Appointment = (props: any) => {
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
            name="Appointment"
          />
        </Box>
        <Box width="300px" m="20px" marginTop="20px">
          <Box display="flex" justifyContent="space-between">
            <TextFile fontSize="md" name="Hiring Method" />
            <TextFile color="grey" fontSize="sm" name="optional" />
          </Box>
          <select
            placeholder="select option"
            style={{
              width: "300px",
              padding: "10px",
              color: "black",
              height: "40px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
            {...register("hire", { required: true, maxLength: 20 })}
          >
            <option value="option1">Direct Hire</option>
            <option value="option2">Indirect Hire</option>
          </select>
        </Box>
        {errors?.hire?.type === "required" && (
          <p style={{ color: "red" }}>This field is required!! ⚠</p>
        )}
        <Box
          m="20px"
          marginTop="20px"
          display="flex"
          // width="100px"
          justifyContent="space-between"
        >
          <Box>
            <TextFile fontSize="md" name="AppointmentDate" />

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
              {...register("AppointmentDate")}
            />
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between">
              <TextFile fontSize="md" name="Appointment Letter Number" />
              <TextFile color="grey" fontSize="sm" name="optional" />
            </Box>
            <input
              style={{
                width: "300px",
                padding: "10px",
                color: "black",
                height: "40px",
                borderRadius: "7px",
                border: "1px solid black",
              }}
              {...register("AppointmentLetterNumber")}
            />
          </Box>
          <Box>
            <TextFile fontSize="md" name="Appointment Letter Date" />
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
              {...register("AppointmentLetterDate")}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
