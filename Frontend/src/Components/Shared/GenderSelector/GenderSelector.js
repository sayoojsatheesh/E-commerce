// MUI //
import {
  Drawer,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormGroup,
  Slider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomCheckbox = styled(Checkbox)({
  "&.Mui-checked": {
    color: "black", // Specify your desired checked checkbox color
  },
});
const GenderSelector = ({ setgenders, genders }) => {
  // Control Gender CheckBox //
  function handleCheckbox(key) {
    if (genders[key]) {
      setgenders((prevState) => {
        return { ...prevState, [key]: false };
      });
      return;
    }
    setgenders((prevState) => {
      return { ...prevState, [key]: true };
    });
  }

  return (
    <Box>
    
      <Box>
        <FormGroup>
          <FormControlLabel
            control={
              <CustomCheckbox
                inputProps={{ "aria-label": "controlled" }}
                checked={genders.Men}
              />
            }
            label="Men"
            onChange={() => {
              handleCheckbox("Men");
            }}
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                inputProps={{ "aria-label": "controlled" }}
                checked={genders.Female}
                onChange={() => {
                  handleCheckbox("Female");
                }}
              />
            }
            label="Female"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                inputProps={{ "aria-label": "controlled" }}
                checked={genders.Kids}
                onChange={() => {
                  handleCheckbox("Kids");
                }}
              />
            }
            label="Kids"
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default GenderSelector;
