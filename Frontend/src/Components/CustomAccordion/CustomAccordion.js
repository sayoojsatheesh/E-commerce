// MUI //
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const styles = {
  accordion: {
    margin: "0px", // You can adjust the margin value as per your preference
  },
};

const CustomAccordion = ({ children, heading }) => {
  const [expandAccordian, setexpandAccordian] = useState(true);
  return (
    <Accordion
      expanded={expandAccordian}
      onChange={() => {
        setexpandAccordian((prevState) => {
          return !prevState;
        });
      }}
      style={styles.accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography sx={{fontWeight:'bold'}}>{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
