// React //
import React, { useEffect, useState } from "react";
// MUI //
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
// Other //
import { Link } from "react-router-dom";

const LeftSideDrawer = (props) => {
  const [open, setopen] = useState(props.openDrawer);
  function handleDrawerClose() {
    props.setopenDrawer(false);
  }

  useEffect(() => {
    setopen(props.openDrawer);
  }, [props.openDrawer]);

  return (
    <Drawer
      transitionDuration={{ enter: 800, exit: 800 }}
      anchor="left"
      open={open}
      sx={{ zIndex: "6000" }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2.5rem",
          gap: "1rem",
          fontFamily: "monospace",
          zIndex: "6000",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: ".5rem 1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CloseIcon
            onClick={() => {
              props.setopenDrawer(false);
            }}
            fontSize="large"
          />
        </Box>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/all"
        >
          <Box
            onClick={() => {
              props.setopenDrawer(false);
            }}
          >
            All
          </Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/men"
        >
          <Box onClick={handleDrawerClose}>Men</Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/women"
        >
          <Box onClick={handleDrawerClose}>Women</Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/kids"
        >
          <Box onClick={handleDrawerClose}>Kids</Box>
        </Link>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default LeftSideDrawer;
