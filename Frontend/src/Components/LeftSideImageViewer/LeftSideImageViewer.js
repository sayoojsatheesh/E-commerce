// MUI //
import { Box } from "@mui/material";
import { useState } from "react";
const LeftSideImageViewer = (props) => {
 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {props.ImageUrls.map((item) => (
        <Box
          key={item.id}
          sx={{
            height: "60px",
            width: "60px",
            margin: ".5rem .5rem",
            borderRadius: "10px",
          }}
          onMouseOver={() => {
            props.setimageURL(item.img);
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              
            }}
            src={item.img}
          />
        </Box>
      ))}
    </Box>
  );
};

export default LeftSideImageViewer;
