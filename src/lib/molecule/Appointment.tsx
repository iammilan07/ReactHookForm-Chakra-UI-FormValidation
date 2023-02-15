import React from "react";
import { Box } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
import { useForm } from "react-hook-form";
const Appointment = (props: any) => {
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
            name="Appointment"
          />
        </Box>
        <Box width="300px" m="20px" marginTop="20px">
          <Box display="flex" justifyContent="space-between">
            <Textfile fontSize="md" name="Hiring Method" />
            <Textfile color="grey" fontSize="sm" name="optional" />
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
          width="700px"
          justifyContent="space-between"
        >
          <Box>
            <Textfile fontSize="md" name="AppointmentDate" />

            <input type="date" {...register("AppointmentDate")} />
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between">
              <Textfile fontSize="md" name="Appointment Letter Number" />
              <Textfile color="grey" fontSize="sm" name="optional" />
            </Box>
            <input {...register("AppointmentLetterNumber")} />
          </Box>
          <Box>
            <Textfile fontSize="md" name="Appointment Letter Date" />
            <input type="date" {...register("AppointmentLetterDate")} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
