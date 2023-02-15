import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import AdditionalInformation from "../../molecule/additionalInformation";
import Appointment from "../../molecule/appointment";
import Contact from "../../molecule/contact";
import FirstHeading from "../../molecule/firstHeading";
import { Footer } from "../../molecule/footer";
import Introduction from "../../molecule/introduction";
import JobAndPlacement from "../../molecule/jobAndPlacement";
import Leaves from "../../molecule/leaves";
import SalaryAndBenefit from "../../molecule/salaryAndBenefit";
export function TopPart() {
  const initialValues: any = { firstName: "e.g:- Puzan", mothername: "xyz" };

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });
  const onhandleSubmit = (data: any, e: any) => {
    e.preventDefault();
    reset();
    alert(JSON.stringify(data));
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onhandleSubmit)}>
        <FirstHeading />
        <Introduction errors={errors} register={register} />
        <AdditionalInformation errors={errors} register={register} />
        <Appointment errors={errors} register={register} />
        <JobAndPlacement errors={errors} register={register} />
        <SalaryAndBenefit errors={errors} register={register} />
        <Leaves errors={errors} register={register} />
        <Contact errors={errors} register={register} />
        <Footer />
      </form>
    </Box>
  );
}

export default TopPart;
