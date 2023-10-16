// React //
import { useEffect, useState } from "react";
// MUI //
import { Box } from "@mui/material";
// Custom //
import API_BASE_URL from "../../Utilis/apiConfig";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import CustomCarousel from "../../Components/Carousel/CustomCarousel";
import BufferToImage from "../../Utilis/BufferToImage";

// Other //
import axios from "axios";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const [productData, setproductData] = useState({});
  const [loadingData, setloadingData] = useState(true);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    getSingleProduct();
  }, []);

  useEffect(() => {
    if (!productData.title) {
      console.log("in");
      return;
    }
    const loadImage = async () => {
      console.log("productData.image1 =", productData.image1);
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

  console.log(productData);
  console.log("imageUrl =", imageUrl);

  // Access the current path from the URL
  const location = useLocation();
  const currentPath = location.pathname;
  // Extract the ending part of the path (last segment)
  const pathSegments = currentPath.split("/");
  const endingPath = pathSegments[pathSegments.length - 1];

  console.log("response =", productData);
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
        <Box></Box>
      ) : (
        <Box>
          <ProductInfo
            productName={productData.title}
            productSubTitle={productData.subTitle}
            price={productData.price.CurrentPrice}
          />
          {imageUrl.length > 0 ? <CustomCarousel imagePath={imageUrl} /> : null}
        </Box>
      )}
    </>
  );
};

export default SingleProduct;
