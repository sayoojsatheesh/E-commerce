// CSS
import classes from "./ProductCard.module.css";
// React //
import { useEffect, useState } from "react";
import formatNumberWithSpaces from "../../Utilis/FormatPrice";

const ProductsCard = (props) => {
  const [imageUrl, setImageUrl] = useState(null);

  // Covert Image buffer to Image //
  const loadImageAsync = async () => {
    if (props.data?.image1?.data) {
      const uint8Array = new Uint8Array(props.data.image1.data);
      const blob = new Blob([uint8Array], {
        type: props.data.image1.type,
      });
      const imageUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(blob);
      });
      return imageUrl;
    }
    return null;
  };

  useEffect(() => {
    const loadImage = async () => {
      const url = await loadImageAsync();
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
    <div className={classes.ProductContainer}>
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
  );
};

export default ProductsCard;
