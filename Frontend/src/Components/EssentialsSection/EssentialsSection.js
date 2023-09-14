// MUI //
import { Grid, Box } from "@mui/material";
// Custom //
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";

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
      <Grid container rowGap={1} columnSpacing={1} justifyContent='center'>
        <Grid item xs={12} sm={4}>
          <CategoriesContainer buttonText={`Men's`} imagePath={"/Images/Mens.webp"} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CategoriesContainer buttonText={`Women's`} imagePath={"/Images/Womens.webp"} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CategoriesContainer buttonText={`Kid's`} imagePath={"/Images/Kids.webp"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EssentialsSection;
