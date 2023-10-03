import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Button, styled } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import classes from "./SortByDropDown.module.css";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const SortByDropDown = (props) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const handleChange = (event) => {
    props.setsortBy(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        displayEmpty
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={props.sortBy}
        onChange={handleChange}
        sx={{
          // ... other styles
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: 0,
            cursor: "pointer",
            "& ~ .MuiSelect-icon": {
              display: "none", // hide the default dropdown arrow icon
            },
            "&.Mui-focused ~ .MuiSelect-icon": {
              display: "none", // hide the dropdown arrow icon when the select is focused
            },
          },
        }}
      >
        <MenuItem disabled value="">
          <em>Sort By</em>
        </MenuItem>
        <MenuItem
          disabled={"Price: High-Low" == props.sortBy}
          value={"Price: High-Low"}
        >
          Price: High-Low
        </MenuItem>
        <MenuItem
          disabled={"Price: Low-High" == props.sortBy}
          value={"Price: Low-High"}
        >
          Price: Low-High
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortByDropDown;
