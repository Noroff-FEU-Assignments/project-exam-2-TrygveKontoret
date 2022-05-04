import styled from "styled-components";
import { CarouselProvider, Slide } from "pure-react-carousel";
import { Carousel } from "react-responsive-carousel";

export const CarouselWrapper = styled(CarouselProvider)`
  /* background-size: cover;
  background-position: center; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const StyledSlide = styled(Slide)`
  img {
    position: absolute;
    top: -50%;
    right: 0;
    bottom: 0;
    left: 0;
    max-height: 200%;
    max-width: 100%;
    /* overflow: none; */
  }
`;

export const StyledCarousel = styled(Carousel)`
  @media (min-width: 768px) {
    div {
      max-height: 500px;

      .slide {
        height: 500px;
      }

      img {
        /* max-height: 500px; */
        /* -ms-transform: translate(-100%, -40%); */
        transform: translate(-100%, -40%);
      }
    }
  }
`;
