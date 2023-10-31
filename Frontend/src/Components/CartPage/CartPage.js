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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Custom //
import CartSingleItem from "../CartSingleItem/CartSingleItem";
import { removeAllProduct } from "../../features/productsSlice";
import formatNumberWithSpaces from "../../Utilis/FormatPrice";
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

  // Calculating total Items and Amount //
  let totalItems = cartPageItems.reduce(
    ({ acc, totalAmount }, item) => {
      let amount = item.quantity * item.price;
      return { acc: acc + item.quantity, totalAmount: totalAmount + amount };
    },
    { acc: 0, totalAmount: 0 }
  );

  // Delete all products in cart or favourites//
  function handleDeleteAllProducts() {
    dispatch(removeAllProduct({ type: `${endingPathBoolean ? "cart" : ""}` }));
  }

  function handleCheckOut() {
    setTimeout(function () {
      handleDeleteAllProducts();
      toast.success("Order Successful", {
        position: toast.POSITION.TOP_CENTER,
      });
    }, 1000);
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
          <h1 className={classes.EmptyHeading}>
            Your {endingPathBoolean ? "Cart" : "Wishlist"} is Empty
          </h1>
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
      {cartPageItems.length > 0 && endingPath === "cart" ? (
        <Box className={classes.TotalAmountContainer}>
          <Box sx={{ minWidth: "250px" }}>
            <Box sx={{ display: "flex", columnGap: "25px" }}>
              <Box className={classes.SubTotal}>
                <span>Sub-Total</span>
                <span style={{ fontSize: ".8rem", color: "gray" }}>
                  {totalItems.acc} Items
                </span>
              </Box>
              <Box sx={{ fontSize: "1.7rem" }}>
                ₹{formatNumberWithSpaces(totalItems.totalAmount)}
              </Box>
            </Box>
            <Box>
              <button
                onClick={handleCheckOut}
                className={classes.CheckoutButton}
              >
                Checkout
              </button>
            </Box>
          </Box>
        </Box>
      ) : null}
      <ToastContainer />
    </Box>
  );
};

export default CartPage;
