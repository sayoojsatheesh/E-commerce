// CSS //
import classes from "./CarouselImageContainer.module.css";
// MUI //
import { useMediaQuery, useTheme } from "@mui/material";

const CarouselImageConatainer = (props) => {
  const theme = useTheme();
  const dontShowMenuIcon = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={`${classes.ImageContainer} ${
        dontShowMenuIcon ? null : classes.ImageContainerBigScreen
      }`}
    >
      <img src={props.imagePath} alt="SlideImage" className={classes.Image} />
      <button className={classes.button}>SHOP NOW</button>
    </div>
  );
};

export default CarouselImageConatainer;
