/ MUI //
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filters from "./Filters"; // Assuming Filters component is imported correctly

const styles = {
    accordion: {
      marginBottom: "0px", // You can adjust the margin value as per your preference
    },
  };

const CustomAccordion = () => {
    return(     <Accordion style={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {children}
        </AccordionDetails>
      </Accordion>)
};

export default CustomAccordion;
