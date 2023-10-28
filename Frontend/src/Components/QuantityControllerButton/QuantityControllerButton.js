// MUI //
import { Box } from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
// Redux //
import { useDispatch } from "react-redux";
// Custom//
import { removeProduct } from "../../features/productsSlice";

const QuantityControllerButton = ({ quantity, id }) => {
  const dispatch = useDispatch();
  function handleRemoveProduct() {
    dispatch(removeProduct({ type: "cart", removeCount: "one", id }));
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <RemoveCircleOutlineOutlinedIcon
        onClick={handleRemoveProduct}
        sx={{ cursor: "pointer" }}
        fontSize="small"
      />
      <span style={{ margin: "0 .2rem", fontWeight: "bold" }}>{quantity}</span>
      <ControlPointOutlinedIcon sx={{ cursor: "pointer" }} fontSize="small" />
    </Box>
  );
};

export default QuantityControllerButton;
