import classes from "./ProductCard.module.css";

const ProductsCard = (props) => {
  console.log("DAta =", props.data);
  // Convert the data array to a Uint8Array
  const uint8Array = new Uint8Array(props.data?.products[0].image1.data);

  // Create a blob from the Uint8Array
  const blob = new Blob([uint8Array], {
    type: props.data?.products[0].image1.ype,
  });

  // Create a data URL from the blob
  const imageUrl = URL.createObjectURL(blob);

  let availableColours = CountColor(props.data?.products[0].colour);
  let colourText = availableColours > 1 ? "Colours" : "Colour";
  console.log(typeof(props.data?.products[0].price))
  let prices = props.data?.products[0].price
    ? JSON.parse(props.data?.products[0].price)
    : null;
  // Function Calculates the colors available//
  function CountColor(colors) {
    return colors?.split("/").length;
  }
  return (
    <div className={classes.ProductContainer}>
      <img src={imageUrl} alt="ProductImage" className={classes.ProductImage} />
      <div className={classes.title}>{props.data?.products[0].title}</div>
      <div className={classes.subTitle}>{props.data?.products[0].subTitle}</div>
      <div className={classes.subTitle}>
        {availableColours} {colourText}
      </div>
      <div className={classes.title}>MRP : {prices?.CurrentPrice}</div>
    </div>
  );
};

export default ProductsCard;
