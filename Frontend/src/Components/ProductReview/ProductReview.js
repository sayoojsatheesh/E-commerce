// MUI //
import Rating from "@mui/material/Rating";

const ProductReview = (props) => {
  return (
    <Rating
      sx={{ color: "black", marginBottom: "1rem", marginLeft: "1.5rem" }}
      name="read-only"
      value={props.value}
      readOnly
    />
  );
};

export default ProductReview;
