// MUI //
import Carousel from "react-material-ui-carousel";
// Custom //
import CarouselImageConatainer from "../CarouselImageContainer/CarouselImageContainer";

// Image Path Array //
let imagePath = [
  "/Images/slide-1.png",
  "/Images/slide-2.png",
  "/Images/slide-3.png",
];

const CustomCarousel = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel animation="slide" duration={700} indicators={false}>
        {imagePath.map((item) => (
          <CarouselImageConatainer imagePath={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
