// React //
import React from "react";
// MUI //
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
// Other //
import { Link } from "react-router-dom";

const LeftSideDrawer = (props) => {
  function handleDrawerClose() {
    props.setopenDrawer(false);
  }

  return (
    <Drawer anchor="left" open={props.openDrawer} onClose={handleDrawerClose}>
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
        }}
        role="presentation"
      >
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/all"
          onClick={() => {
            props.setopenDrawer(false);
          }}
        >
          <Box>All</Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/men"
          onClick={() => {
            props.setopenDrawer(false);
          }}
        >
          <Box>Men</Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/women"
          onClick={() => {
            props.setopenDrawer(false);
          }}
        >
          <Box>Women</Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/kids"
          onClick={() => {
            props.setopenDrawer(false);
          }}
        >
          <Box>Kids</Box>
        </Link>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default LeftSideDrawer;
