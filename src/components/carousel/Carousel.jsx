import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bergen1 from "../../media/bergen1.jpg";
import bergen2 from "../../media/bergen2.jpg";
import bergen3 from "../../media/bergen3.jpg";
import {
  StyledCarousel,
  StyledDetailCarousel,
  StyledRoomCarousel,
} from "./CarouselStyles";

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
      <div className="imgCont">
        {/* <p>{data.name}</p> */}
        <img src={data.data.attributes.img_url} alt="Bryggen in Bergen" />
      </div>
      <div className="imgCont">
        <img
          src={data.data.attributes.img_url2}
          alt={data.data.attributes.name}
        />
      </div>
      <div className="imgCont">
        <img src={data.data.attributes.img_url3} alt="Bryggen in Bergen" />
      </div>
      <div className="imgCont">
        <img src={data.data.attributes.img_url4} alt="Bryggen in Bergen" />
      </div>
    </StyledDetailCarousel>
  );
};

export const RoomCarousel = (room) => {
  return (
    <StyledRoomCarousel
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      stopOnHover={false}
    >
      <div className="imgCont">
        {/* <p>{data.name}</p> */}
        <img src={room.data.attributes.img_url} alt="Bryggen in Bergen" />
      </div>
      <div className="imgCont">
        <img src={room.data.attributes.img_url2} alt="" />
      </div>
      <div className="imgCont">
        <img src={room.data.attributes.img_url3} alt="Bryggen in Bergen" />
      </div>
    </StyledRoomCarousel>
  );
};

export const ActivityCarousel = (data) => {
  return (
    <StyledDetailCarousel
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      stopOnHover={false}
    >
      <div className="imgCont">
        <img
          src={data.data.attributes.img_url}
          alt={data.data.attributes.name}
        />
      </div>
      <div className="imgCont">
        <img
          src={data.data.attributes.img_url2}
          alt={data.data.attributes.name}
        />
      </div>
    </StyledDetailCarousel>
  );
};
