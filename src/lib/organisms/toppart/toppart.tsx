import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import AdditionalInformation from "../../molecule/Additionalinformation";
import Appointment from "../../molecule/Appointment";
import Contact from "../../molecule/Contact";
import FirstHeading from "../../molecule/FirstHeading";
import { Footer } from "../../molecule/Footer";
import Introduction from "../../molecule/Introduction";
import JobAndPlacement from "../../molecule/Jobandplacement";
import Leaves from "../../molecule/Leaves";
import SalaryAndBenefit from "../../molecule/Salaryandbenefit";
export function TopPart() {
  const initialValues: any = { firstName: "e.g:- Jhonny", mothername: "xyz" };

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
