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
  let coloursCount = colours.length == 0 ? "" : `(${colours.length})`;

  return (
    <div className={classes.FilterContainer}>
      {endingPath == "all" ? (
        <CustomAccordion
          heading={`Gender ${genderSelectedCount ? genderSelectedCount : ""}`}
        >
          <GenderSelector genders={genders} setgenders={setgenders} />
        </CustomAccordion>
      ) : null}
      <CustomAccordion heading={"Shop By Price"}>
        <PriceRangeSlider
          priceRange={priceRange}
          setpriceRange={setpriceRange}
        />
      </CustomAccordion>
      <CustomAccordion heading={`Colours ${coloursCount ? coloursCount : ""}`}>
        <ColourPicker setcolours={setcolours} colours={colours} />
      </CustomAccordion>
    </div>
  );
};

export default SideFilter;
