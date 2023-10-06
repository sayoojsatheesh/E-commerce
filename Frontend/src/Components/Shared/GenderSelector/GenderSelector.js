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

  // Function helps to calculate the genders selected //
  function countTrueFalseKeys(obj) {
    let trueCount = 0;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === true) {
          trueCount++;
        }
      }
    }

    trueCount = trueCount == 0 ? "" : `(${trueCount})`;
    return trueCount;
  }
  let genderCount = countTrueFalseKeys(genders);
  return (
    <Box>
      <h3>Gender {genderCount}</h3>
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
