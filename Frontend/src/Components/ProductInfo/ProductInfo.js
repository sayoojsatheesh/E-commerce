// MUI //
import { Box } from "@mui/material";
// Custom //
import FormatPrice from "../../Utilis/FormatPrice";
// CSS //
const styles = {
  fontStyle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  subText: {
    color: "gray",

    marginTop: ".2rem",
  },
};

const ProductInfo = (props) => {
  return (
    <Box sx={{ padding:'1rem 1.5rem' }}>
      <Box sx={{ marginBottom: ".5rem" }}>
        <Box sx={{ fontWeight: "bold", fontSize: "24px" }}>
          {props.productName}
        </Box>
        <Box style={styles.fontStyle}>{props.productSubTitle}</Box>
      </Box>
      <Box style={styles.fontStyle}>MRP : ₹ {FormatPrice(props.price)}</Box>
      <Box style={styles.subText}>incl. of taxes</Box>
      <Box style={styles.subText}>Also includes all applicable duties</Box>
    </Box>
  );
};

export default ProductInfo;
