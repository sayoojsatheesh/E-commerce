// Custom //
import CustomCarousel from "../../Components/Carousel/CustomCarousel";
import EssentialsSection from "../../Components/EssentialsSection/EssentialsSection";

// Image Path Array //
let imagePath = [
  { id: 1, img: "/Images/slide-1.png" },
  { id: 2, img: "/Images/slide-2.png" },
  { id: 3, img: "/Images/slide-3.png" },
];

const Home = () => {
  return (
    <>
      <CustomCarousel imagePath={imagePath} showButton={true} autoPlay={true} />
      <EssentialsSection />
    </>
  );
};

export default Home;
