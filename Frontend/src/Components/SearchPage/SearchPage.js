// React //
import { useState, useEffect } from "react";
// MUI //
import { Box, Drawer, Grid, useTheme, useMediaQuery } from "@mui/material";
// Other //
import axios from "axios";
// Custom //
import SearchBarGrowing from "../Shared/SearchBarGrowing/SearchBarGrowing";
import API_BASE_URL from "../../Utilis/apiConfig";
import ProductsCard from "../ProductsCard/ProductsCard";
import LoadingIcon from "../Shared/LoadingIcon/LoadingIcon";

const SearchPage = ({ showSearchPage, setshowSearchPage }) => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setproductData] = useState([]);
  const [isFetching, setisFetching] = useState(false);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      if (searchTerm.length > 0) {
        fetchData();
      } else {
        setproductData([]);
      }
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchTerm]);

  // Save Search Text //
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  async function fetchData() {
    try {
      setisFetching(true);
      const response = await axios.get(
        `${API_BASE_URL}/SearchProducts?searchTerm=${searchTerm}`
      );
      setproductData(response.data.products);
      setisFetching(false);
    } catch (error) {
      console.log("Error =", error);
    }
  }
  return (
    <Drawer
      sx={{ width: "100vw", height: "100vh", zIndex: "5005" }}
      anchor="right"
      open={showSearchPage}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: mediumScreen ? ".5em 1.9em" : ".5em 1em",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <SearchBarGrowing handleInputChange={handleInputChange} />
          </Box>
          <Box
            onClick={() => {
              setshowSearchPage(false);
              setSearchTerm("");
            }}
            sx={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Cancel
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {!isFetching ? (
            <Grid
              container
              sx={{
                paddingLeft: mediumScreen ? "1.5em" : "",
                paddingRight: mediumScreen ? "1.5em" : "",
                width: "100%",
              }}
              spacing={2}
            >
              {productData.map((item) => (
                <Grid item key={Math.random()} xs={6} md={4}>
                  <ProductsCard data={item} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box
              sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoadingIcon />
            </Box>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default SearchPage;
