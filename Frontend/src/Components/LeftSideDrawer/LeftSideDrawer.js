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
          <Box
            onClick={() => {
              props.setopenDrawer(false);
            }}
          >
            Men
          </Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/women"
        >
          <Box
            onClick={() => {
              props.setopenDrawer(false);
            }}
          >
            Women
          </Box>
        </Link>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/products/kids"
        >
          <Box
            onClick={() => {
              props.setopenDrawer(false);
            }}
          >
            Kids
          </Box>
        </Link>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default LeftSideDrawer;
