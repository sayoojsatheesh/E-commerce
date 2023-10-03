// MUI //
import Carousel from "react-material-ui-carousel";
// Custom //
import CarouselImageConatainer from "../CarouselImageContainer/CarouselImageContainer";

// Image Path Array //
let imagePath = [
  { id: 1, img: "/Images/slide-1.png" },
  { id: 2, img: "/Images/slide-2.png" },
  { id: 3, img: "/Images/slide-3.png" },
];

const CustomCarousel = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel animation="slide" duration={700} indicators={false}>
        {imagePath.map((item) => (
          <CarouselImageConatainer key={item.id} imagePath={item.img} />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
