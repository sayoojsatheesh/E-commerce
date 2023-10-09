import React from "react";

// MUI //
import { Drawer, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

// CSS //
import classes from "./BottomFiler.module.css";
// Custom//
import Filters from "../Shared/Filters/Filters";
import GenderSelector from "../Shared/GenderSelector/GenderSelector";
import PriceRangeSlider from "../Shared/PriceRangeSlider/PriceRangeSlider";
import ColourPicker from "../Shared/ColourPicker/ColourPicker";

const BottomFilter = ({
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
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setopenBottomFilter(open);
  };

  return (
    <>
      <Drawer
        transitionDuration={{ enter: 900, exit: 900 }}
        anchor="bottom"
        sx={{ width: "100vw", height: "80vh", zIndex: 10000 }}
        open={openBottomFilter}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        onKeyDown={toggleDrawer(false)}
      >
        <Box className={classes.MainContainer}>
          <Box className={classes.CancelButtonContainer}>
            <CancelIcon
              onClick={() => {
                setopenBottomFilter(false);
              }}
              fontSize="large"
            />
          </Box>
          <h3>Filters</h3>
          <h3>Sort By</h3>
          <Filters setsortBy={setsortBy} sortBy={sortBy} />
          {endingPath == "all" ? (
            <GenderSelector genders={genders} setgenders={setgenders} />
          ) : null}
          <PriceRangeSlider
            priceRange={priceRange}
            setpriceRange={setpriceRange}
          />
          <ColourPicker setcolours={setcolours} colours={colours} />
        </Box>
      </Drawer>
    </>
  );
};

export default BottomFilter;