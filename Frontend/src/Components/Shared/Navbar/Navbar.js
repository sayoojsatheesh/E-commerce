// React //
import { useState } from "react";
// CSS //
import classes from "./Navbar.module.css";
// MUI Icons //
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// MUI //
import { useMediaQuery, useTheme, Badge } from "@mui/material";
// Custom Components //
import SearchBar from "../../SearchBar/SearchBar";
import LeftSideDrawer from "../../LeftSideDrawer/LeftSideDrawer";
// Other //
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const theme = useTheme();
  const dontShowMenuIcon = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setopenDrawer] = useState(false);

  const cartItems = useSelector((state) => {
    return state.products.cartList;
  });

  const favItems = useSelector((state) => {
    return state.products.favourites;
  });

  console.log("cartItems", cartItems);
  return (
    <div
      className={`${classes.NavbarContainer} ${
        dontShowMenuIcon ? null : classes.ExtraPadding
      }`}
    >
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <img src={"/Images/logo.svg"} className={classes.Logo} alt="logo" />
        </Link>
      </div>
      {dontShowMenuIcon ? null : (
        <div className={classes.MiddleSection}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/all"
          >
            <span className={classes.Catagories}>All</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/men"
          >
            <span className={classes.Catagories}>Men</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/women"
          >
            <span className={classes.Catagories}>Women</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/kids"
          >
            <span className={classes.Catagories}>Kids</span>
          </Link>
        </div>
      )}
      <div className={classes.IconContainer}>
        {dontShowMenuIcon ? (
          <SearchOutlinedIcon className={classes.IconColor} fontSize="large" />
        ) : (
          <SearchBar />
        )}
        <Badge badgeContent={favItems.length} color="info">
          <FavoriteBorderOutlinedIcon
            className={classes.IconColor}
            fontSize="large"
          />
        </Badge>
        <Badge badgeContent={cartItems.length} color="info">
          <ShoppingCartCheckoutOutlinedIcon
            className={classes.IconColor}
            fontSize="large"
          />
        </Badge>
        <PersonOutlineOutlinedIcon
          className={classes.IconColor}
          fontSize="large"
        />
        {dontShowMenuIcon ? (
          <MenuOutlinedIcon
            onClick={() => {
              setopenDrawer((prevState) => {
                return !prevState;
              });
            }}
            className={classes.IconColor}
            fontSize="large"
          />
        ) : null}
      </div>
      <LeftSideDrawer openDrawer={openDrawer} setopenDrawer={setopenDrawer} />
    </div>
  );
};

export default Navbar;
