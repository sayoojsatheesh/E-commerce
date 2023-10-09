// React //
import { useState } from "react";
// CSS //
import classes from "./SideFilter.module.css";
// MUI //
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Custom //
import Filters from "../Shared/Filters/Filters";

const styles = {
  accordion: {
    marginBottom: "0px", // You can adjust the margin value as per your preference
  },
};

const SideFilter = ({
  openBottomFilter,
  setopenBottomFilter,
  sortBy,
  setsortBy,
  setgenders,
  genders,
  priceRange,
  setpriceRange,
  colours,
  setcolours,
  endingPath,
}) => {
  const [sortByExpand, setsortByExpand] = useState(true);
  return (
    <div className={classes.FilterContainer}>
      <Accordion
        expanded={sortByExpand}
        style={styles.accordion}
        onChange={() => {
          setsortByExpand((prevState) => {
            return !prevState;
          });
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'bold'}}>Sort By</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Filters setsortBy={setsortBy} sortBy={sortBy} />
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};

export default SideFilter;
