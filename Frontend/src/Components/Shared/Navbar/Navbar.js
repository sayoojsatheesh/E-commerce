// CSS //
import classes from "./Navbar.module.css";
// MUI Icons //
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// MUI //
import { useMediaQuery, useTheme } from "@mui/material";
// Custom Components //
import SearchBar from "../../SearchBar/SearchBar";

const Navbar = () => {
  const theme = useTheme();
  const dontShowMenuIcon = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      className={`${classes.NavbarContainer} ${
        dontShowMenuIcon ? null : classes.ExtraPadding
      }`}
    >
      <div>
        <img
          src={"/Images/logo.svg"}
          className={classes.Logo}
          alt="logo"
        />
      </div>
      {dontShowMenuIcon ? null : (
        <div className={classes.MiddleSection}>
          <span className={classes.Catagories}>All</span>
          <span className={classes.Catagories}>Men</span>
          <span className={classes.Catagories}>Women</span>
          <span className={classes.Catagories}>Kids</span>
        </div>
      )}
      <div className={classes.IconContainer}>
        {dontShowMenuIcon ? (
          <SearchOutlinedIcon className={classes.IconColor} fontSize="large" />
        ) : (
          <SearchBar />
        )}
        <FavoriteBorderOutlinedIcon
          className={classes.IconColor}
          fontSize="large"
        />
        <ShoppingCartCheckoutOutlinedIcon
          className={classes.IconColor}
          fontSize="large"
        />
        <PersonOutlineOutlinedIcon
          className={classes.IconColor}
          fontSize="large"
        />
        {dontShowMenuIcon ? (
          <MenuOutlinedIcon className={classes.IconColor} fontSize="large" />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
