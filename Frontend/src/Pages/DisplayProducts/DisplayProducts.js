// React //
import { useState } from "react";
// Custom//
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import API_BASE_URL from "../../Utilis/apiConfig";
import LoadingSkeleton from "../../Components/LoadingSkelton/LoadingSkelton";
// MUI //
import { Grid, useTheme, useMediaQuery, Box, Button } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
// CSS //
import classes from "./DisplayProduct.module.css";
// Other //
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const DisplayProducts = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ offSet = 0 }) => {
      return fetchData(offSet);
    },
    getNextPageParam: (prevData) => {
      return prevData + 9;
    },
    retry: 1,
    staleTime: Infinity,
  });

  // Function is used to fetch Product data (12)//
  async function fetchData(offset = 0) {
    console.log("hy");
    const response = await axios.get(`${API_BASE_URL}/items?offset=${offset}`); // Replace with your API endpoint
    return { ...response.data, previousOffset: offset };
  }
  console.log("Data =", data);
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
        <Box></Box>

        <InfiniteScroll
          dataLength={10}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<LoadingSkeleton mediumScreen={mediumScreen} />}
        >
          <Grid
            container
            spacing={1}
            rowSpacing={2}
            sx={{
              paddingLeft: mediumScreen ? "1.5em" : "",
              paddingRight: mediumScreen ? "1.5em" : "",
            }}
          >
            {!isLoading ? (
              data.pages[0]?.products?.map((item, i) => {
                return (
                  <Grid key={Math.random()} item xs={6} md={4}>
                    <ProductsCard
                      data={item}
                      error={error}
                      isLoading={isLoading}
                    />
                  </Grid>
                );
              })
            ) : (
              <LoadingSkeleton mediumScreen={mediumScreen} />
            )}
          </Grid>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default DisplayProducts;
