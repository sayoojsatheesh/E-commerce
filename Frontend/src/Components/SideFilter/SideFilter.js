// CSS //
import classes from "./SideFilter.module.css";
// Custom //
import CustomAccordion from "../CustomAccordion/CustomAccordion";
import GenderSelector from "../Shared/GenderSelector/GenderSelector";
import countTrueFalseKeys from "../../Utilis/GenderCount";
import PriceRangeSlider from "../Shared/PriceRangeSlider/PriceRangeSlider";
import ColourPicker from "../Shared/ColourPicker/ColourPicker";

const SideFilter = ({
  setgenders,
  genders,
  priceRange,
  setpriceRange,
  colours,
  setcolours,
  endingPath,
}) => {
  let genderSelectedCount = countTrueFalseKeys(genders);

  return (
    <div className={classes.FilterContainer}>
      <CustomAccordion
        heading={`Gender ${genderSelectedCount ? genderSelectedCount : ""}`}
      >
        {endingPath == "all" ? (
          <GenderSelector genders={genders} setgenders={setgenders} />
        ) : null}
      </CustomAccordion>
      <CustomAccordion heading={"Shop By Price"}>
        <PriceRangeSlider
          priceRange={priceRange}
          setpriceRange={setpriceRange}
        />
      </CustomAccordion>
      <CustomAccordion heading={"Colour Picker"}>
        <ColourPicker setcolours={setcolours} colours={colours} />
      </CustomAccordion>
    </div>
  );
};

export default SideFilter;
