// Custom//
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import API_BASE_URL from "../../Utilis/apiConfig";
// Other //
import { useQuery } from "react-query";
import axios from "axios";

const DisplayProducts = () => {
  const { data, error, isLoading } = useQuery("myQueryKey", fetchData);

  // Function is used to fetch Product data (12)//
  async function fetchData () {
    const response = await axios.get(`${API_BASE_URL}/items`); // Replace with your API endpoint
    return response.data;
  };
  return (
    <div>
      <ProductsCard data={data} error isLoading />
    </div>
  );
};

export default DisplayProducts;
