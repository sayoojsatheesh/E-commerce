// React //
import { useState } from "react";

// MUI //
import { Grid, useTheme, useMediaQuery } from "@mui/material";
// CSS //
import classes from "./Footer.module.css";
// Custom //
import FooterAccordian from "../../FooterAccordian/FooterAccordian";
import SocialMediaButtons from "../../SocialMediaButtons/SocialMediaButtons";

/// Custom Text Array//
let textArray1 = [
  "Order Status",
  "Dilvery",
  "Returns",
  "Payment Options",
  "Contact Us On Nike.com Inquiries",
  "Contact Us On All Other Inquiries",
];
let textArray2 = ["News", "Careers", "Investors", "Sustainability"];

const Footer = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);
  // Function helps to control the opening and closing of Accordians//
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.FooterContainer}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            color: "white",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div style={{ borderBottom: mdDown ? "1px solid grey" : null }}>
            <h5>Find a Store</h5>
            <h5>Become a Member</h5>
            <h5>Send us Feedback</h5>
            <h5>Student Discounts</h5>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <FooterAccordian
              Heading={"GET HELP"}
              expanded={expanded}
              handleChange={handleChange}
              textArray={textArray1}
              onChangeText={"panel1"}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <FooterAccordian
              Heading={"ABOUT NIKE"}
              expanded={expanded}
              handleChange={handleChange}
              textArray={textArray2}
              onChangeText={"panel2"}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <SocialMediaButtons />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
