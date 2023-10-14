// React //
import { useEffect } from "react";
// MUI //
import { Box } from "@mui/material";
// Custom //
import API_BASE_URL from "../../Utilis/apiConfig";
// Other //
import axios from "axios";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  useEffect(() => {
    getSingleProduct();
  }, []);

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
      console.log("response =", response);
    } catch (error) {
      console.log("Error in getSingleProduct", error);
    }
  }
  return <Box></Box>;
};

export default SingleProduct;
