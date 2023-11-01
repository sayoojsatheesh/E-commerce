// React //
import React, { useEffect, useState, useRef } from "react";
// MUI //
import { Box } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// Custom //
import classes from "./SearchBarGrowing.module.css";

const SearchBarGrowing = ({ handleInputChange }) => {
  const inputRef = useRef(null);
  const [isGrowing, setIsGrowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsGrowing(true);
    }, 300);
  }, []);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <Box className={classes.InputContainer}>
      <SearchOutlinedIcon fontSize="large" sx={{ color: "gray" }} />
      <input
        ref={inputRef}
        onChange={handleInputChange}
        className={`${classes.Input} ${isGrowing ? classes.grow : null}`}
      ></input>
    </Box>
  );
};

export default SearchBarGrowing;
