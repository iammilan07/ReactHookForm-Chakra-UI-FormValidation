import { Box } from "@chakra-ui/react";
import AdditionalInformation from "../../molecule/AdditionalInformation";
import Appointment from "../../molecule/Appointment";
import Contact from "../../molecule/Contact";
import FirstHeading from "../../molecule/FirstHeading";
import { Footer } from "../../molecule/Footer";
import Introduction from "../../molecule/Introduction";
import JobAndPlacement from "../../molecule/JobAndPlacement";
import Leaves from "../../molecule/Leaves";
import SalaryAndBenefit from "../../molecule/SalaryAndBenefit";
import { useForm } from "react-hook-form";
export function Toppart() {
  //reacthookfrom
  const { handleSubmit, reset, register } = useForm();
  const onhandleSubmit = (e: any) => {
    e.preventDefault(e);
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onhandleSubmit)}>
        <FirstHeading />
        <Introduction register={register} />
        <AdditionalInformation register={register} />
        <Appointment register={register} />
        <JobAndPlacement register={register} />
        <SalaryAndBenefit register={register} />
        <Leaves register={register} />
        <Contact register={register} />
        <Footer />
      </form>
    </Box>
  );
}

export default Toppart;
