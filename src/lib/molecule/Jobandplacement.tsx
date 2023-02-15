import React from "react";
import { Box } from "@chakra-ui/react";
import Textfile from "../atom/text/text";
import { useForm } from "react-hook-form";
const JobAndPlacement = (props: any) => {
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
            <Box color="black">
              <select
                placeholder="Add Level"
                style={{
                  width: "300px",
                  padding: "10px",
                  color: "black",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                }}
              >
                <option value="option1">Kathmandu</option>
                <option value="option2">Pokhara</option>
              </select>
            </Box>
          </Box>
          <Box width="300px">
            <Textfile fontSize="md" name="Position" />
            <Box>
              <select
                placeholder="select option"
                style={{
                  padding: "10px",
                  color: "black",
                  width: "300px",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                }}
                {...register("position")}
              >
                <option value="option1">Assistant Finance Manager</option>
                <option value="option2">Assistance Developer</option>
              </select>
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
              <select
                placeholder="select option"
                style={{
                  padding: "10px",
                  color: "black",
                  width: "300px",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                }}
                {...register("jobStatus")}
              >
                <option value="option1">Probation</option>
                <option value="option2">Pokhara</option>
              </select>
            </Box>
          </Box>
          <Box width="300px">
            <Textfile fontSize="md" name="Position" />
            <input
              type="date"
              style={{
                padding: "10px",
                color: "black",
                height: "40px",
                borderRadius: "7px",
                border: "1px solid black",
              }}
              {...register("position", { required: true, maxLength: 20 })}
            />
          </Box>
          {errors?.position?.type === "required" && (
            <p style={{ color: "red" }}>This field is required!! ⚠</p>
          )}
        </Box>

        <Box width="300px" m="20px" marginTop="20px">
          <Box display="flex" justifyContent="space-between">
            <Textfile fontSize="md" name="Unit" />
            <Textfile color="grey" fontSize="sm" name="optional" />
          </Box>
          <select
            style={{
              padding: "10px",
              color: "black",
              height: "40px",
              borderRadius: "7px",
              border: "1px solid black",
              width: "300px",
            }}
            placeholder="select option"
            {...register("unit")}
          >
            <option value="option1">Kathmandu</option>
            <option value="option2">Jhapa</option>
          </select>
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
                {...register("branch", { required: true, maxLength: 20 })}
              >
                <option value="option1">Kathmandu</option>
                <option value="option2">Pokhara</option>
              </select>
            </Box>
            {errors?.branch?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )}
          </Box>
          <Box width="300px">
            <Textfile fontSize="md" name="Department" />
            <Box>
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
                {...register("department", { required: true, maxLength: 20 })}
              >
                <option value="option1">Finance</option>
                <option value="option2">Developer</option>
              </select>
            </Box>
            {errors?.department?.type === "required" && (
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
            <Textfile fontSize="md" name="Unit or Subdepartment" />
            <Box>
              <select
                placeholder="Add Unit"
                style={{
                  padding: "10px",
                  color: "black",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                  width: "300px",
                }}
                {...register("unit", { required: true, maxLength: 20 })}
              >
                <option value="option1">Kathmandu</option>
                <option value="option2">Pokhara</option>
              </select>
            </Box>
            {errors?.unit?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )}
          </Box>
          <Box width="300px">
            <Textfile fontSize="md" name="Location" />
            <Box>
              <select
                placeholder="Add Location"
                style={{
                  padding: "10px",
                  color: "black",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                  width: "300px",
                }}
                {...register("location", { required: true, maxLength: 20 })}
              >
                <option value="option1">Assistant Finance Manager</option>
                <option value="option2">Assistance Developer</option>
              </select>
            </Box>
            {errors?.location?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobAndPlacement;
