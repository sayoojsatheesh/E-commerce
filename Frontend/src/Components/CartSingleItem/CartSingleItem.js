// MUI//
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
// Custom //
import QuantityControllerButton from "../QuantityControllerButton/QuantityControllerButton";
import formatNumberWithSpaces from "../../Utilis/FormatPrice";
import { removeProduct } from "../../features/productsSlice";
// Redux //
import { useDispatch } from "react-redux";
// Other //
import { Link } from "react-router-dom";

const CartSingleItem = ({ productData, endingPath, id }) => {
  const dispatch = useDispatch();
  let endingPathBoolean = endingPath === "cart";

  // Delete the Product //
  function handleDelete() {
    dispatch(
      removeProduct({
        type: `${endingPathBoolean ? "cart" : ""}`,
        removeCount: "all",
        id,
      })
    );
  }

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/products/${id}`}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: ".5rem",
          alignItems: "center",
          gap: 2,
          cursor: "pointer",
        }}
      >
        <span style={{ maxWidth: "100px", width: "30%" }}>
          <img
            src={productData.imageURL}
            style={{ width: "100%", height: "100%" }}
          />
        </span>
        <span style={{ width: "30%" }}>
          <Box sx={{ fontWeight: "bold", fontSize: "14px" }}>
            {productData.title}
          </Box>
          <Box sx={{ fontSize: "10px" }}>{productData.subTitle}</Box>
        </span>
        {endingPathBoolean ? (
          <span style={{ minWidth: "70px", width: "20%" }}>
            <QuantityControllerButton id={id} quantity={productData.quantity} />
          </span>
        ) : null}
        <span
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ fontWeight: "bold", fontSize: "14px", minWidth: "65px" }}>
            ₹ {formatNumberWithSpaces(productData.totalAmount)}
          </Box>
          <Box sx={{ textAlign: "center", color: "red", cursor: "pointer" }}>
            <Tooltip title="Delete">
              <DeleteIcon onClick={handleDelete} fontSize="small" />
            </Tooltip>
          </Box>
        </span>
      </Box>
    </Link>
  );
};

export default CartSingleItem;
