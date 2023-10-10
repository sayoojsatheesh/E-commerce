// MUI //
import { Box, Slider } from "@mui/material";
// CSS //
import classes from "./PriceRangeSlider.module.css";

const PriceRangeSlider = ({ priceRange, setpriceRange }) => {
  // Function helps to change price range//
  const handlePriceChange = (event, newValue) => {
    setpriceRange(newValue);
  };

  return (
    <Box>
      <Box sx={{ padding: ".2rem .5rem" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={30000}
          step={500}
          style={{ color: "gray" }}
          valueLabelFormat={(value) => `${value}`}
        />
        <div className={classes.PriceRangeContainer}>
          Selected Price Range:
          <span className={classes.PriceSelected}> {priceRange[0]}</span> -
          <span className={classes.PriceSelected}>{priceRange[1]}</span>
        </div>
      </Box>
    </Box>
  );
};

export default PriceRangeSlider;
