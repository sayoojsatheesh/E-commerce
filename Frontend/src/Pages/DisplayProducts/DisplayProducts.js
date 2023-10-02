// React imports
import React from "react";
import { useState } from "react";

// Custom component imports
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import API_BASE_URL from "../../Utilis/apiConfig";
import LoadingSkeleton from "../../Components/LoadingSkelton/LoadingSkelton";

// Material-UI imports
import { Grid, useTheme, useMediaQuery, Box, Button } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

// CSS import
import classes from "./DisplayProduct.module.css";

// Other imports
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const DisplayProducts = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ offset = 0 }) => {
      return fetchData(offset);
    },
    getNextPageParam: (prevData) => {
      console.log("Calculating next offset from:", prevData);
      return prevData + 9;
    },
    retry: 0,
    staleTime: Infinity,
  });

  async function fetchData(offset = 0) {
    const response = await axios.get(`${API_BASE_URL}/items?offset=${offset}`);
    return { ...response.data, previousOffset: offset };
  }

  return (
    <>
      {data ? (
        <Box className={classes.filterContainer}>
          <span style={{ fontSize: "20px", color: "GrayText" }}>
            {data?.pages[0]?.totalCount} Results
          </span>
          <Button
            sx={{ color: "black", borderRadius: "50px" }}
            variant="outlined"
            endIcon={<TuneOutlinedIcon />}
          >
            Filter
          </Button>
        </Box>
      ) : (
        <Box sx={{ width: "100%", height: "60.5px" }}></Box>
      )}
      <div className={classes.ProductDisplayContainer}>
        
      </div>
    </>
  );
};

export default DisplayProducts;
