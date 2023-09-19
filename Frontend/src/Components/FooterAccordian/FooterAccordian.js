// MUI //
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FooterAccordian = (props) => {
  return (
    <Accordion
      expanded={props.expanded === props.onChangeText}
      sx={{ backgroundColor: "black", color: "white", width: "100%" }}
      onChange={props.handleChange(props.onChangeText)}
    >
      <AccordionSummary
        expandIcon={<AddIcon sx={{ color: "white" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.Heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {props.textArray.map((item) => (
          <h6>{item}</h6>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default FooterAccordian;
