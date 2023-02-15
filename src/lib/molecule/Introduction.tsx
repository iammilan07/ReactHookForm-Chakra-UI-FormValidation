import React from "react";
import { Box, FormControl } from "@chakra-ui/react";
import TextFile from "../atom/text/text";
import Buttoncom from "../atom/button/button";

const Introduction = (props: any) => {
  const { register, errors } = props;

  return (
    <Box>
      <FormControl>
        <Box
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
              <TextFile fontSize="md" name="First Name" />

              <input
                type="text"
                placeholder="Add your First Name"
                style={{
                  padding: "10px",
                  color: "black",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                }}
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              {errors?.firstName?.type === "required" && (
                <p style={{ color: "red" }}>This field is required!! ⚠</p>
              )}
            </Box>

            <Box>
              <Box display="flex" justifyContent="space-between">
                <TextFile fontSize="md" name="Middle Name" />
                <TextFile color="grey" fontSize="sm" name="optional" />
              </Box>
              <input
                placeholder="Add your Middle Name"
                style={{
                  padding: "10px",
                  color: "black",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                }}
                {...register("middlename", { required: false, maxLength: 20 })}
              />
            </Box>

            <Box>
              <TextFile fontSize="md" name="Last Name" />
              <input
                placeholder="Add your Last Name"
                style={{
                  padding: "10px",
                  color: "black",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                }}
                {...register("lastName", { required: true, maxLength: 20 })}
              />
              {errors?.lastName?.type === "required" && (
                <p style={{ color: "red" }}>This field is required!! ⚠</p>
              )}
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
                <TextFile fontSize="lg" name="नाम (नेपालीमा)" />
                <TextFile color="grey" fontSize="sm" name="optional" />
              </Box>
              <input
                placeholder="आफनो नाम नेपालीमा लेख्नुहोस"
                style={{
                  width: "470px",
                  padding: "10px",
                  color: "black",
                  height: "40px",
                  borderRadius: "7px",
                  border: "1px solid black",
                }}
                {...register("nepaliname", { required: false, maxLength: 20 })}
              />
            </Box>
          </Box>

          <Box
            m="20px"
            marginTop="20px"
            display="flex"
            width="700px"
            justifyContent="space-between"
          >
            <Box
              border="1px solid black"
              borderRadius="10px"
              width="300px"
              height="100px"
            >
              <input
                type="file"
                {...register("file", { required: false, maxLength: 20 })}
              />
            </Box>
            {/* {errors?.file?.type === "required" && (
              <p style={{ color: "red" }}>This field is required!! ⚠</p>
            )} */}
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Introduction;
