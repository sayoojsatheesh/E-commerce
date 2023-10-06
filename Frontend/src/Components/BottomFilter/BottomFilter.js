import React, { useState } from "react";

// MUI //
import {
  Drawer,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";

// CSS //
import classes from "./BottomFiler.module.css";

const CustomCheckbox = styled(Checkbox)({
  "&.Mui-checked": {
    color: "black", // Specify your desired checked checkbox color
  },
});

const CustomRadio = styled(Radio)({
  "&.Mui-checked": {
    color: "black", // Specify your desired checked checkbox color
  },
});

const BottomFilter = ({
  openBottomFilter,
  setopenBottomFilter,
  sortBy,
  setsortBy,
  setgenders,
  genders,
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

  // Control SortBy Change //
  const handleSortBy = (event) => {
    setsortBy(event.target.value);
  };

  function handleChekbox(key) {
    
  }

  console.log(genders);

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
          <Box className={classes.SortByContainer}>
            <h3>Sort By</h3>
            <Box>
              <FormControl
                onClick={(event) => {
                  handleSortBy(event);
                }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={sortBy}
                >
                  <FormControlLabel
                    value="Price: High-Low"
                    control={<CustomRadio />}
                    label="Price: High-Low"
                  />
                  <FormControlLabel
                    value="Price: Low-High"
                    control={<CustomRadio />}
                    label="Price: Low-High"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box>
            <h3>Gender</h3>
            <Box>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox checked={genders.Men} />}
                  label="Men"
                  onChange={() => {
                    handleChekbox("Men");
                  }}
                />
                <FormControlLabel
                  control={
                    <CustomCheckbox
                      checked={genders.Female}
                      onChange={() => {
                        handleChekbox("Female");
                      }}
                    />
                  }
                  label="Female"
                />
                <FormControlLabel
                  control={
                    <CustomCheckbox
                      checked={genders.Kids}
                      onChange={() => {
                        handleChekbox("Kids");
                      }}
                    />
                  }
                  label="Kids"
                />
              </FormGroup>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default BottomFilter;
