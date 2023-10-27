// MUI //
import { Box } from "@mui/material";
// React Redux //
import { useSelector } from "react-redux";

const CartPage = (props) => {
  let cartPageItems;
  if (props.Type == "Cart") {
    cartPageItems = useSelector((state) => {
      return state.products.cartList;
    });
  } else {
    cartPageItems = useSelector((state) => {
      return state.products.favourites;
    });
  }
  return <Box>
    
  </Box>;
};

export default CartPage;
