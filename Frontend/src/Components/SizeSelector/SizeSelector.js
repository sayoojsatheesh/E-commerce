import { Box, Grid } from "@mui/material";

// Size Array//
let sizeChart = [
  { id: 1, size: "UK 6" },
  { id: 2, size: "UK 6.5" },
  { id: 3, size: "UK 7" },
  { id: 4, size: "UK 7.5" },
  { id: 5, size: "UK 8" },
  { id: 6, size: "UK 8.5" },
  { id: 7, size: "UK 9" },
  { id: 8, size: "UK 9.5" },
  { id: 9, size: "UK 10" },
];

const styles = {
  disabled: {
    pointerEvents: "none",
    backgroundColor: "lightgray",
    color: "gray",
    border: "none",
  },
};

const SizeSelector = () => {
  return (
    <Box sx={{ padding: "1rem 1.5rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between",marginBottom:'4px'}}>
        <span style={{ fontWeight: "bold" }}>Select Size</span>
        <span style={{ color: "gray" }}>Size Guide</span>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowGap={1} spacing={2}>
          {sizeChart.map((item) => (
            <Grid
              item
              key={item.id}
              xs={4}
              display={"flex"}
              justifyContent={"space-around"}
            >
              <Box
                style={item.id === 3 || item.id === 7 ? styles.disabled : null}
                sx={{
                  border: "1px solid gray",
                  width: "110px",
                  textAlign: "center",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                {item.size}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SizeSelector;
