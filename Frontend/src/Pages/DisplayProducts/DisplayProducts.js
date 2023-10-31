// React //
import React, { useEffect, useState } from "react";
// MUI //
import { Grid, useTheme, useMediaQuery, Box, Button } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
// Custom //
import API_BASE_URL from "../../Utilis/apiConfig";
import LoadingSkeleton from "../../Components/LoadingSkelton/LoadingSkelton";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import classes from "./DisplayProduct.module.css";
import SortByDropDown from "../../Components/SortByDropDown/SortByDropDown";
import BottomFilter from "../../Components/BottomFilter/BottomFilter";
import SideFilter from "../../Components/SideFilter/SideFilter";
// Other //
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { useLocation } from "react-router-dom";
import "animate.css";

const DisplayProducts = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [showFilters, setshowFilters] = useState(mediumScreen);
  const [sortBy, setsortBy] = useState("");
  const [filters, setfilters] = useState({});
  const [genders, setgenders] = useState({
    Men: false,
    Female: false,
    Kids: false,
  });
  const [colours, setcolours] = useState([]);
  const [priceRange, setpriceRange] = useState([0, 20000]);

  // Access the current path from the URL
  const location = useLocation();
  const currentPath = location.pathname;
  // Extract the ending part of the path (last segment)
  const pathSegments = currentPath.split("/");
  const endingPath = pathSegments[pathSegments.length - 1];

  const { fetchNextPage, data, refetch, isFetching } = useInfiniteQuery(
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

  // Refetch data when filter changes //
  useEffect(() => {
    if (filters) {
      refetch();
    }
  }, [filters, endingPath, genders, colours, sortBy]);

  // Get Products data //
  async function fetchData(offset = 0) {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/items?offset=${offset}`,
        {
          params: {
            filterBy: { genders, priceRange, colours, sortBy },
            path: endingPath,
          },
        }
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

  let FilterComponent = mediumScreen ? (
    <SideFilter
      openBottomFilter={showFilters}
      setopenBottomFilter={setshowFilters}
      setsortBy={setsortBy}
      sortBy={sortBy}
      genders={genders}
      setgenders={setgenders}
      priceRange={priceRange}
      setpriceRange={setpriceRange}
      setcolours={setcolours}
      colours={colours}
      endingPath={endingPath}
      refetch={refetch}
    />
  ) : (
    <BottomFilter
      openBottomFilter={showFilters}
      setopenBottomFilter={setshowFilters}
      setsortBy={setsortBy}
      sortBy={sortBy}
      genders={genders}
      setgenders={setgenders}
      priceRange={priceRange}
      setpriceRange={setpriceRange}
      setcolours={setcolours}
      colours={colours}
      endingPath={endingPath}
      refetch={refetch}
    />
  );

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
                fontSize: "large",
              }}
              variant="text"
              endIcon={<TuneOutlinedIcon />}
              onClick={handleShowFilters}
            >
              {showFilters ? "Hide Filter" : "Show Filter"}
            </Button>
            {mediumScreen ? (
              <SortByDropDown
                setfilters={setfilters}
                sortBy={sortBy}
                setsortBy={setsortBy}
                refetch={refetch}
                filters={filters}
              />
            ) : null}
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: "100%", height: "60.5px" }}></Box>
      )}
      <div className={classes.ProductDisplayContainer}>
        <div className={classes.FilterComponent}>
          {showFilters ? FilterComponent : null}
        </div>

        {data ? (
          <InfiniteScroll
            dataLength={flattenData.length}
            next={fetchNextPage}
            hasMore={
              data?.pages[0]?.totalCount !== flattenData.length ? true : false
            }
            loader={<div className={classes.Loader}>Loading More...</div>}
          >
            <Box
              sx={{ width: "100vw", display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                sx={{
                  paddingLeft: mediumScreen ? "1.5em" : "",
                  paddingRight: mediumScreen ? "1.5em" : "",
                  width: "100%",
                }}
                spacing={2}
              >
                {flattenData.map((item) => (
                  <Grid item key={item._id} xs={6} md={4}>
                    <ProductsCard isFetching={isFetching} data={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </InfiniteScroll>
        ) : (
          <LoadingSkeleton mediumScreen={mediumScreen} />
        )}
      </div>
    </>
  );
};

export default DisplayProducts;
