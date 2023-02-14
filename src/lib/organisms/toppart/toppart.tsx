import Fistheading from "../../molecule/fistheading";
import { Box } from "@chakra-ui/react";
import Introduction from "../../molecule/Introduction";
import Additionalinformation from "../../molecule/Additionalinformation";
import Appointment from "../../molecule/Appointment";
import Jobandplacement from "../../molecule/Jobandplacement";
import Salaryandbenefit from "../../molecule/Salaryandbenefit";
import Leaves from "../../molecule/Leaves";
import Contact from "../../molecule/Contact";
import { Footer } from "../../molecule/Footer";

export function Toppart() {
  return (
    <>
      <Box>
        <Fistheading />
        <Introduction />
        <Additionalinformation />
        <Appointment />
        <Jobandplacement />
        <Salaryandbenefit />
        <Leaves />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default Toppart;
