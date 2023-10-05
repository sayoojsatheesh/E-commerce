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
import SideFilter from "../../Components/SideFilter/SideFilter";
// Other //
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { useLocation } from "react-router-dom";
import "animate.css";

const DisplayProducts = () => {
  const [showFilters, setshowFilters] = useState(false);
  const [sortBy, setsortBy] = useState("");
  const [filters, setfilters] = useState({});

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  // Access the current path from the URL
  const location = useLocation();
  const currentPath = location.pathname;
  // Extract the ending part of the path (last segment)
  const pathSegments = currentPath.split("/");
  const endingPath = pathSegments[pathSegments.length - 1];

  console.log(endingPath);

  const { fetchNextPage, hasNextPage, data, refetch } = useInfiniteQuery(
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
  }, [filters]);

  // Get Products data //
  async function fetchData(offset = 0) {
    const filtersQueryString = new URLSearchParams(filters).toString();
    console.log("filtersQueryString =", filtersQueryString, filters);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/items?offset=${offset}`,
        { params: { filters } }
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
            <SortByDropDown
              setfilters={setfilters}
              sortBy={sortBy}
              setsortBy={setsortBy}
              refetch={refetch}
              filters={filters}
            />
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: "100%", height: "60.5px" }}></Box>
      )}
      <div className={classes.ProductDisplayContainer}>
        {showFilters ? <SideFilter /> : null}
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
                width: "100%",
              }}
              spacing={2}
            >
              {flattenData.map((item) => (
                <Grid
                  item
                  key={item._id}
                  xs={6}
                  md={4}
                >
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
