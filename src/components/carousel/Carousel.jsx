import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bergen1 from "../../media/bergen1.jpg";
import bergen2 from "../../media/bergen2.jpg";
import bergen3 from "../../media/bergen3.jpg";
import { StyledCarousel } from "./CarouselStyles";

const Carousel = () => {
  return (
    <StyledCarousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      stopOnHover={false}
    >
      <div>
        <img src={bergen1} alt="" />
      </div>
      <div>
        <img src={bergen2} alt="" />
      </div>
      <div>
        <img src={bergen3} alt="" />
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
