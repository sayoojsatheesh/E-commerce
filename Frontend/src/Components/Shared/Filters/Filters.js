// MUI //
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// CSS //
import classes from "./Filters.module.css";

const CustomRadio = styled(Radio)({
  "&.Mui-checked": {
    color: "black", // Specify your desired checked checkbox color
  },
});

const Filters = ({ sortBy, setsortBy }) => {
  // Control SortBy Change //
  const handleSortBy = (event) => {
    setsortBy(event.target.value);
  };
  return (
    <>
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
    </>
  );
};

export default Filters;
