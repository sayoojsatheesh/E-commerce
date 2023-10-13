// CSS //
import classes from "./ColourPicker.module.css";
// MUI //
import { Box } from "@mui/material";
// Custom //
import SingleColour from "../../SingleColour/SingleColour";
const ColourPicker = ({ setcolours, colours }) => {
  
  return (
    <Box sx={{marginBottom:'1rem'}}>
      <Box>
        <Box className={classes.ColourContainer}>
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Black"}
          />
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Red"}
          />
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Pink"}
          />
        </Box>
        <Box className={classes.ColourContainer}>
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Gray"}
          />
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Green"}
          />
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Blue"}
          />
        </Box>
        <Box className={classes.ColourContainer}>
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"White"}
            border={true}
          />
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Multi"}
          />
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Brown"}
          />
        </Box>
        <Box className={classes.ColourContainer}>
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Yellow"}
          />
          <SingleColour
            setcolours={setcolours}
            colours={colours}
            colour={"Purple"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ColourPicker;
