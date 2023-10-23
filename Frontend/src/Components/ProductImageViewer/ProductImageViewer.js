// React //
import { useEffect, useState } from "react";
// MUI //
import { Box } from "@mui/material";
// CSS //
import classes from "./ProductImageViewer.module.css";
// Custom //
import LeftSideImageViewer from "../LeftSideImageViewer/LeftSideImageViewer";
import RightSideImage from "../RightSideImage/RightSideImage";

const ProductImageViewer = (props) => {
  const [imageURL, setimageURL] = useState(props?.ImageUrls[0]?.img);

  useEffect(() => {
    setimageURL(props?.ImageUrls[0]?.img);
  }, [props.ImageUrls]);

  return (
    <Box className={classes.MainContainer}>
      <Box className={classes.LeftSide}>
        <LeftSideImageViewer
          setimageURL={setimageURL}
          ImageUrls={props.ImageUrls}
          imageURL={imageURL}
        />
      </Box>
      <Box className={classes.RightSide}>
        <RightSideImage imageURL={imageURL} />
      </Box>
    </Box>
  );
};

export default ProductImageViewer;
