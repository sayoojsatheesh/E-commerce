// MUI //
import { Box } from "@mui/material";
// Custom //
import SingleColour from "../../SingleColour/SingleColour";
const ColourPicker = () => {
  return (
    <Box>
      <h3>Colours</h3>
      <Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <SingleColour />
          <SingleColour />
          <SingleColour />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <SingleColour />
          <SingleColour />
          <SingleColour />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <SingleColour />
          <SingleColour />
          <SingleColour />
        </Box>
        <Box sx={{
            display: "flex",
            backgroundColor: "grey",
            width: "70%",
            margin: "0 auto",
            justifyContent:'space-between'
          }}>
          <SingleColour />
          <SingleColour />
        </Box>
      </Box>
    </Box>
  );
};

export default ColourPicker;
