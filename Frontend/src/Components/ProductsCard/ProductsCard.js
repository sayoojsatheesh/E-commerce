// CSS
import classes from "./ProductCard.module.css";
// React //
import { useEffect, useState } from "react";
import formatNumberWithSpaces from "../../Utilis/FormatPrice";
// MUI //
import CircularProgress from "@mui/material/CircularProgress";
// Custom //
import BufferToImage from "../../Utilis/BufferToImage";
// Other //
import { Link } from "react-router-dom";

const ProductsCard = (props) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const url = await BufferToImage(props.data?.image1);
      setImageUrl(url);
    };
    loadImage();
  }, [props.data]); // Run the effect whenever props.data changes
  let availableColours = CountColor(props.data?.colour);
  let colourText = availableColours > 1 ? "Colours" : "Colour";
  let currentPrice = formatNumberWithSpaces(props.data?.price.CurrentPrice);

  // Function Calculates the colors available//
  function CountColor(colors) {
    return colors?.split("/").length;
  }
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`${props.isFetching ? "#" : `/products/${props.data.id}`}`}
    >
      <div className={`${classes.ProductContainer} `}>
        {props.isFetching ? (
          <div className={classes.OverLay}>
            <CircularProgress />
          </div>
        ) : null}
        <img
          src={imageUrl ? imageUrl : "/Images/WhiteScreen.avif"}
          alt="ProductImage"
          className={classes.ProductImage}
        />
        {imageUrl ? (
          <div className={classes.ProductInfo}>
            <div className={classes.title}>{props.data?.title}</div>
            <div className={classes.subTitle}>{props.data?.subTitle}</div>
            <div className={classes.subTitle}>
              {availableColours} {colourText}
            </div>
            <div className={classes.title}>MRP : ₹ {currentPrice}</div>
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default ProductsCard;
