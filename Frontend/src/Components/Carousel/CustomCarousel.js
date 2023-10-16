// MUI //
import Carousel from "react-material-ui-carousel";
// Custom //
import CarouselImageConatainer from "../CarouselImageContainer/CarouselImageContainer";

const CustomCarousel = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel
        animation="slide"
        autoPlay={props.autoPlay}
        duration={700}
        indicators={false}
      >
        {props.imagePath?.map((item) => (
          <CarouselImageConatainer
            showButton={props.showButton}
            key={item.id}
            imagePath={item.img}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
