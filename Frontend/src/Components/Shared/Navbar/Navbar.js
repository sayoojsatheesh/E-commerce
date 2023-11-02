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
// Other //
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const styles = {
  linkStyle: {
    textDecoration: "none",
    color: "black", // You can adjust the margin value as per your preference
  },
};

const Navbar = ({ setshowSearchPage, openDrawer, setopenDrawer }) => {
  const theme = useTheme();
  const dontShowMenuIcon = useMediaQuery(theme.breakpoints.down("md"));

  // Getting Items count from Local Storage //
  const cartItems = useSelector((state) => {
    return state.products.totalItemsInCart;
  });

  const favItems = useSelector((state) => {
    return state.products.totalItemsInFavourites;
  });

  function handleShowSearchPage() {
    setshowSearchPage((prevState) => {
      return !prevState;
    });
  }

  return (
    <div
      className={`${classes.NavbarContainer} ${
        dontShowMenuIcon ? null : classes.ExtraPadding
      }`}
    >
      <div>
        <Link style={styles.linkStyle} to="/">
          <img src={"/Images/logo.svg"} className={classes.Logo} alt="logo" />
        </Link>
      </div>
      {dontShowMenuIcon ? null : (
        <div className={classes.MiddleSection}>
          <Link style={styles.linkStyle} to="/products/all">
            <span className={classes.Catagories}>All</span>
          </Link>
          <Link style={styles.linkStyle} to="/products/men">
            <span className={classes.Catagories}>Men</span>
          </Link>
          <Link style={styles.linkStyle} to="/products/women">
            <span className={classes.Catagories}>Women</span>
          </Link>
          <Link style={styles.linkStyle} to="/products/kids">
            <span className={classes.Catagories}>Kids</span>
          </Link>
        </div>
      )}

      <div className={classes.IconContainer}>
        {dontShowMenuIcon ? (
          <SearchOutlinedIcon
            onClick={handleShowSearchPage}
            className={classes.IconColor}
            fontSize="large"
          />
        ) : (
          <SearchBar handleShowSearchPage={handleShowSearchPage} />
        )}
        <Badge badgeContent={favItems} color="info">
          <Link style={styles.linkStyle} to="/products/favourites">
            <FavoriteBorderOutlinedIcon
              className={classes.IconColor}
              fontSize="large"
            />
          </Link>
        </Badge>
        <Badge badgeContent={cartItems} color="info">
          <Link style={styles.linkStyle} to="/products/cart">
            <ShoppingCartCheckoutOutlinedIcon
              className={classes.IconColor}
              fontSize="large"
            />
          </Link>
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
    </div>
  );
};

export default Navbar;
