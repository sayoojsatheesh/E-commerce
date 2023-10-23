// React //
import { useEffect, useState } from "react";
// MUI //
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
// Custom //
import API_BASE_URL from "../../Utilis/apiConfig";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import CustomCarousel from "../../Components/Carousel/CustomCarousel";
import BufferToImage from "../../Utilis/BufferToImage";
import SingleProductSkeleton from "../../Components/SingleProductSkeleton/SingleProductSkeleton";
import SizeSelector from "../../Components/SizeSelector/SizeSelector";
import ProductReview from "../../Components/ProductReview/ProductReview";
import ProductImageViewer from "../../Components/ProductImageViewer/ProductImageViewer";

// Other //
import axios from "axios";
import { useLocation } from "react-router-dom";
// CSS //
import classes from "./SingleProduct.module.css";

const SingleProduct = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [productData, setproductData] = useState({});
  const [loadingData, setloadingData] = useState(true);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    getSingleProduct();
  }, []);

  useEffect(() => {
    if (!productData.title) {
      return;
    }
    const loadImage = async () => {
  
      const url1 = await BufferToImage(productData.image1);
      const url2 = await BufferToImage(productData.image2);
      const url3 = await BufferToImage(productData.image3);
      const url4 = await BufferToImage(productData.image4);
      const url5 = await BufferToImage(productData.image5);
      setImageUrl([
        { id: 1, img: url1 },
        { id: 2, img: url2 },
        { id: 3, img: url3 },
        { id: 4, img: url4 },
        { id: 5, img: url5 },
      ]);
    };
    loadImage();
  }, [productData]);

  // Access the current path from the URL
  const location = useLocation();
  const currentPath = location.pathname;
  // Extract the ending part of the path (last segment)
  const pathSegments = currentPath.split("/");
  const endingPath = pathSegments[pathSegments.length - 1];

  async function getSingleProduct() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/SingleProduct?ProductId=${endingPath}`
      );

      setproductData(response.data.products[0]);
      setloadingData(false);
    } catch (error) {
      console.log("Error in getSingleProduct", error);
    }
  }
  return (
    <>
      {loadingData ? (
        <Box>
          <Grid container>
            <Grid item md={7}></Grid>
            <Grid item md={5}>
              <SingleProductSkeleton />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Grid container>
          <Grid item md={7}>
            {mediumScreen ? <ProductImageViewer ImageUrls={imageUrl} /> : null}
          </Grid>
          <Grid item md={5}>
            <ProductInfo
              productName={productData.title}
              productSubTitle={productData.subTitle}
              price={productData.price.CurrentPrice}
              OriginalPrice={productData.price.OriginalPrice}
              DiscountPrecentage={productData.price.DiscountPrecentage}
            />
            {mediumScreen ? null : imageUrl.length > 0 ? (
              <CustomCarousel
                swipe={true}
                autoPlay={false}
                imagePath={imageUrl}
              />
            ) : null}
            <SizeSelector />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <button className={classes.AddButton}>Add to Cart</button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className={`${classes.WishListButton} ${classes.AddButton}`}
              >
                Favourite
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.svg}
                >
                  <path d="M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"></path>
                </svg>
              </button>
            </Box>
            <Box sx={{ padding: "1rem 1.5rem" }}>
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  fontFamily: "urban",
                }}
              >
                Product Details
              </Box>
              <p>{productData.description}</p>
            </Box>
            <Box sx={{ paddingLeft: ".5rem" }}>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>Colour Shown : </span>
                  {productData.colour}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Style : </span>
                  {productData.style}
                </li>
              </ul>
            </Box>
            <Box sx={{ paddingLeft: "1.5rem" }}>
              <ProductReview value={productData.review} />
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SingleProduct;
