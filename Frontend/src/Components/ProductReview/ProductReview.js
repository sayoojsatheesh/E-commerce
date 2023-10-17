// MUI //
import Rating from "@mui/material/Rating";

const ProductReview = (props) => {
  return <Rating sx={{color:'black',marginBottom:'1rem'}} name="read-only" value={props.value} readOnly />;
};

export default ProductReview;
