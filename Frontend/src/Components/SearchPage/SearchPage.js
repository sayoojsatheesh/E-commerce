// MUI //
import { Box, Drawer } from "@mui/material";
// CSS //
import classes from "./SearchPage.module.css";
// Custom //

const SearchPage = ({ showSearchPage, setshowSearchPage }) => {
  return (
    <Drawer
      sx={{ width: "100vw", height: "100vh", zIndex: "5005" }}
      anchor="bottom"
      open={showSearchPage}
    >
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <Box
          onClick={() => {
            setshowSearchPage(false);
          }}
        >
          cancel
        </Box>
      </Box>
    </Drawer>
  );
};

export default SearchPage;
