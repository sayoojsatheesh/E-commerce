// MUI //
import { Box, Divider, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// CSS //
import classes from "./CartPage.module.css";
// React Redux //
import { useSelector } from "react-redux";
// Other //
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// Custom //
import CartSingleItem from "../CartSingleItem/CartSingleItem";
import { removeAllProduct } from "../../features/productsSlice";
// Redux //
import { useDispatch } from "react-redux";

const CartPage = () => {
  // Access the current path from the URL
  const location = useLocation();
  const currentPath = location.pathname;
  // Extract the ending part of the path (last segment)
  const pathSegments = currentPath.split("/");
  const endingPath = pathSegments[pathSegments.length - 1];
  const dispatch = useDispatch();

  let key = endingPath === "cart" ? "cartList" : "favourites";
  let endingPathBoolean = endingPath === "cart";
  let cartPageItems = useSelector((state) => {
    return state.products[key];
  });

  // Delete all products in cart or favourites//
  function handleDeleteAllProducts() {
    dispatch(removeAllProduct({ type: `${endingPathBoolean ? "cart" : ""}` }));
  }

  return (
    <Box className={classes.MainContainer}>
      <Box className={classes.HeadingContainer}>
        <h3>Shopping Cart</h3>
        {cartPageItems.length > 0 ? (
          <h4 onClick={handleDeleteAllProducts} style={{ cursor: "pointer" }}>
            Remove all
          </h4>
        ) : null}
      </Box>
      {cartPageItems.length > 0 ? (
        cartPageItems.map((item) => (
          <Box key={Math.random()}>
            <CartSingleItem
              endingPath={endingPath}
              productData={item}
              id={item.id}
            />
            <Divider />
          </Box>
        ))
      ) : (
        <Box
          sx={{
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className={classes.EmptyHeading}>Your cart is Empty</h1>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/all"
          >
            <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
              Continue Shopping
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
