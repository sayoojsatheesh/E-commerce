// MUI //
import { Box } from "@mui/material";

const RightSideImage = (props) => {
  return (
    <Box sx={{ height: "531.250px", width: "100%" }}>
      <img
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        src={props.imageURL}
      />
    </Box>
  );
};

export default RightSideImage;
