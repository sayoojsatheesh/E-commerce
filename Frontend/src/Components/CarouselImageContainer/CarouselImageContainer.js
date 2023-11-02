// CSS //
import classes from "./CarouselImageContainer.module.css";
// MUI //
import { useMediaQuery, useTheme } from "@mui/material";
// Other //
import { Link } from "react-router-dom";

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
      {props.showButton ? (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/all"
        >
          <button className={classes.button}>SHOP NOW</button>
        </Link>
      ) : null}
    </div>
  );
};

export default CarouselImageConatainer;
