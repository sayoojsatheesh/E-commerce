// MUI //
import { MenuItem, FormControl, Select } from "@mui/material";

const SortByDropDown = (props) => {
  const handleChange = (event) => {
    props.setsortBy(event.target.value);
    props.setfilters((prevState) => {
      return { ...prevState, sortBy: event.target.value };
    });
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
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none !important", // Remove the border
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none !important", // Remove border on hover
          },
        }}
      >
        <MenuItem disabled value="">
          <em>Sort By</em>
        </MenuItem>
        <MenuItem
          disabled={"Price: High-Low" === props.sortBy}
          value={"Price: High-Low"}
        >
          Price: High-Low
        </MenuItem>
        <MenuItem
          disabled={"Price: Low-High" === props.sortBy}
          value={"Price: Low-High"}
        >
          Price: Low-High
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortByDropDown;
