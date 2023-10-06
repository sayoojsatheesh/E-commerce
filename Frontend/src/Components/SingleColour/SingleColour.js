// MUI //
import { Box } from "@mui/material";
const SingleColour = () => {
  return (
    <Box sx={{width:'30%'}}>
      <Box>
        <Box
          sx={{
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            backgroundColor: "red",
          }}
        >
        </Box>
        <Box>Colour</Box>
      </Box>
    </Box>
  );
};

export default SingleColour;
