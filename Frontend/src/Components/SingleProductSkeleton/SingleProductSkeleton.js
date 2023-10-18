// MUI //
import { Skeleton, Stack, Box } from "@mui/material";

const SingleProductSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Box
        sx={{
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
        }}
      >
        <Skeleton variant="rectangular" width={342} height={32} />
        <Skeleton variant="rectangular" width={100} height={21} />
        <Skeleton variant="rectangular" width={200} height={21} />
        <Skeleton variant="rectangular" width={100} height={21} />
        <Skeleton variant="rectangular" width={170} height={21} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="rectangular" width={500} height={253.19} />
      </Box>
    </Stack>
  );
};

export default SingleProductSkeleton;
