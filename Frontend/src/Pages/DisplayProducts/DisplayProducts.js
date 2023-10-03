// React //
import React, { useState } from "react";
// MUI //
import { Grid, useTheme, useMediaQuery, Box, Button } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// Custom //
import API_BASE_URL from "../../Utilis/apiConfig";
import LoadingSkeleton from "../../Components/LoadingSkelton/LoadingSkelton";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import classes from "./DisplayProduct.module.css";
import SortByDropDown from "../../Components/SortByDropDown/SortByDropDown";
// Other //
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

const DisplayProducts = () => {
  const [showFilters, setshowFilters] = useState(false);
  const [sortBy, setsortBy] = useState("");

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const { fetchNextPage, hasNextPage, data } = useInfiniteQuery(
    ["products"],
    ({ pageParam }) => fetchData(pageParam),
    {
      getNextPageParam: (lastPage) => {
        // Use the offset returned from the backend response for the next page
        if (lastPage.offset > 25) {
          return null; // All Products fetched //
        }
        return lastPage.offset;
      },
      retry: 0,
      staleTime: Infinity,
    }
  );

  // Get Products data //
  async function fetchData(offset = 0) {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/items?offset=${offset}`
      );
      return { ...response.data, previousOffset: offset };
    } catch (error) {
      console.error("Error in fetchData =", error);
      throw error;
    }
  }

  //Consolidating Product Data into a Single Array//
  let flattenData = data?.pages.flatMap((item) => {
    return item.products;
  });

  // Used to Toggle between Filters being shown //
  function handleShowFilters() {
    setshowFilters((prevState) => !prevState);
  }

  return (
    <>
      {data ? (
        <Box className={classes.filterContainer}>
          <span className={classes.ResultText}>
            {data?.pages[0]?.totalCount} Results
          </span>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: "black",
                borderRadius: "50px",
                border: "none",
              }}
              variant="text"
              endIcon={<TuneOutlinedIcon />}
              onClick={handleShowFilters}
            >
              {showFilters ? "Hide Filter" : "Show Filter"}
            </Button>
            <SortByDropDown sortBy={sortBy} setsortBy={setsortBy} />
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: "100%", height: "60.5px" }}></Box>
      )}
      <div className={classes.ProductDisplayContainer}>
        {showFilters ? <Box>hy</Box> : null}
        {data ? (
          <InfiniteScroll
            dataLength={flattenData.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<div className={classes.Loader}>Loading More</div>}
          >
            <Grid
              container
              sx={{
                paddingLeft: mediumScreen ? "1.5em" : "",
                paddingRight: mediumScreen ? "1.5em" : "",
                width: "100vw",
              }}
              spacing={2}
            >
              {flattenData.map((item) => (
                <Grid item key={item.id} xs={6} md={4}>
                  <ProductsCard data={item} />
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        ) : (
          <LoadingSkeleton mediumScreen={mediumScreen} />
        )}
      </div>
    </>
  );
};

export default DisplayProducts;
