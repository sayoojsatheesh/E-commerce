// React //
import { useState } from "react";
// MUI //
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// CSS //
import classes from "./Footer.module.css";
// Custom //
import FooterAccordian from "../../FooterAccordian/FooterAccordian";
import SocialMediaButtons from "../../SocialMediaButtons/SocialMediaButtons";
import FooterList from "../../FooterList/FooterList";

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
let textArray3 = [
  "Guides",
  "Terms of Sale",
  "Terms of Use",
  "Nike Privacy Policy",
];

const Footer = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("sm"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const lgScreen = useMediaQuery(theme.breakpoints.up("md"));
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
          sm={2}
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
        <Grid item xs={12} sm={2}>
          <div>
            {smUp ? (
              <FooterList Heading={"GET HELP"} list={textArray1} />
            ) : (
              <FooterAccordian
                Heading={"GET HELP"}
                expanded={expanded}
                handleChange={handleChange}
                textArray={textArray1}
                onChangeText={"panel1"}
              />
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={2}>
          <div>
            {smUp ? (
              <FooterList Heading={"ABOUT NIKE"} list={textArray2} />
            ) : (
              <FooterAccordian
                Heading={"ABOUT NIKE"}
                expanded={expanded}
                handleChange={handleChange}
                textArray={textArray2}
                onChangeText={"panel2"}
              />
            )}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent={smUp ? "center" : ""}
        >
          <SocialMediaButtons />
        </Grid>
        <Grid item xs={12} display={lgScreen ? "flex" : null}>
          <div
            style={{
              display: lgScreen ? "flex" : null,
              width: lgScreen ? "50%" : "50%",
            }}
          >
            <div className={classes.color}>
              <LocationOnIcon fontSize="small" /> India
            </div>
            <div className={classes.CopySection}>
              © 2023 Nike, Inc. All Rights Reserved
            </div>
          </div>
          <FooterList screen={smUp} list={textArray3} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
