// MUI //
import React from "react";
import { Grid, Skeleton } from "@mui/material";

const LoadingSkeleton = ({ mediumScreen, end }) => {
  return (
    <Grid
      container
      spacing={1}
      rowSpacing={2}
      sx={{
        paddingLeft: mediumScreen ? "1.5em" : "",
        paddingRight: mediumScreen ? "1.5em" : "",
        width: "100vw",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, end).map((item, index) => (
        <Grid key={index} item xs={6} md={4}>
          <Skeleton variant="rectangular" height={mediumScreen ? 381 : 250} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingSkeleton;
