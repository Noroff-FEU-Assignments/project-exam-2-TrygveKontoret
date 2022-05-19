import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bergen1 from "../../media/bergen1.jpg";
import bergen2 from "../../media/bergen2.jpg";
import bergen3 from "../../media/bergen3.jpg";
import { StyledCarousel, StyledDetailCarousel } from "./CarouselStyles";

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
        <img src={bergen1} alt="Bryggen in Bergen" />
      </div>
      <div>
        <img src={bergen2} alt="Overlook of Bergen city" />
      </div>
      <div>
        <img src={bergen3} alt="Bryggen in Bergen" />
      </div>
    </StyledCarousel>
  );
};

export default Carousel;

export const DetailCarousel = (data) => {
  return (
    <StyledDetailCarousel
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      stopOnHover={false}
    >
      <div>
        {/* <p>{data.name}</p> */}
        <img src={data.data.attributes.img_url} alt="Bryggen in Bergen" />
      </div>
      <div>
        <img
          src={data.data.attributes.img_url2}
          alt={data.data.attributes.name}
        />
      </div>
      <div>
        <img src={data.data.attributes.img_url3} alt="Bryggen in Bergen" />
      </div>
      <div>
        <img src={data.data.attributes.img_url4} alt="Bryggen in Bergen" />
      </div>
    </StyledDetailCarousel>
  );
};
