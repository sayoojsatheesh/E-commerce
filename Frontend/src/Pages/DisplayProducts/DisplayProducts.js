// React //
import React, { useEffect, useState } from "react";
// MUI //
import { Grid, useTheme, useMediaQuery, Box, Button } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { styled} from '@mui/material/styles';
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

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const DisplayProducts = () => {
  const [showFilters, setshowFilters] = useState(false);
  const [sortBy, setsortBy] = useState("");
  const [filters, setfilters] = useState({});
  const [genders, setgenders] = useState({
    Men: false,
    Female: false,
    Kids: false,
  });
  const [colours, setcolours] = useState([]);
  const [priceRange, setpriceRange] = useState([0, 30000]);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  // Access the current path from the URL
  const location = useLocation();
  const currentPath = location.pathname;
  // Extract the ending part of the path (last segment)
  const pathSegments = currentPath.split("/");
  const endingPath = pathSegments[pathSegments.length - 1];

  const { fetchNextPage, hasNextPage, data, refetch, isFetching } =
    useInfiniteQuery(["products"], ({ pageParam }) => fetchData(pageParam), {
      getNextPageParam: (lastPage) => {
        // Use the offset returned from the backend response for the next page
        if (lastPage.offset > 25) {
          return null; // All Products fetched //
        }
        return lastPage.offset;
      },
      retry: 0,
      staleTime: Infinity,
    });

  // Refetch data when filter changes //
  useEffect(() => {
    if (filters) {
      refetch();
    }
  }, [filters]);

  // Get Products data //
  async function fetchData(offset = 0) {
    const filtersQueryString = new URLSearchParams(filters).toString();
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
                <Grid item key={item._id} xs={6} md={4}>
                  <ProductsCard isFetching={isFetching} data={item} />
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
