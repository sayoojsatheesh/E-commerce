// React //
import React, { useEffect, useState } from "react";
// MUI //
import { Box } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// Custom //
import classes from "./SearchBarGrowing.module.css";

const SearchBarGrowing = ({ handleInputChange }) => {
  const [isGrowing, setIsGrowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsGrowing(true);
    }, 300);
  }, []);
  return (
    <Box className={classes.InputContainer}>
      <SearchOutlinedIcon fontSize="large" sx={{ color: "gray" }} />
      <input
        onChange={handleInputChange}
        className={`${classes.Input} ${isGrowing ? classes.grow : null}`}
      ></input>
    </Box>
  );
};

export default SearchBarGrowing;
