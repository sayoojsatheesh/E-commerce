import React from "react";
import Drawer from "@mui/material/Drawer";

const BottomFilter = ({ openBottomFilter, setopenBottomFilter }) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setopenBottomFilter(open);
  };

  return (
    <>
      <Drawer
        transitionDuration={{ enter: 800, exit: 800 }}
        anchor="bottom"
        sx={{ width: "100vw", height: "80vh", zIndex: 10000 }}
        open={openBottomFilter}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        onKeyDown={toggleDrawer(false)}
      >
        <div style={{ height: "90vh" }}>Content of the bottom drawer</div>
      </Drawer>
    </>
  );
};

export default BottomFilter;
