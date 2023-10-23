// MUI //
import { Grid, Box } from "@mui/material";
// Custom //
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";
// Other //
import { Link } from "react-router-dom";

const EssentialsSection = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Grid container rowGap={1} columnSpacing={1} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/men"
          >
            <CategoriesContainer
              buttonText={`Men's`}
              imagePath={"/Images/Mens.webp"}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/women"
          >
            <CategoriesContainer
              buttonText={`Women's`}
              imagePath={"/Images/Womens.webp"}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/products/kids"
          >
            <CategoriesContainer
              buttonText={`Kid's`}
              imagePath={"/Images/Kids.webp"}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EssentialsSection;
