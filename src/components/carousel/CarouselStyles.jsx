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
  div {
    border-radius: 0 0 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  .control-dots {
    .dot {
      background-color: white;
      /* border: 2px solid black; */
      width: 15px;
      height: 15px;
    }
  }

  @media (min-width: 768px) {
    div {
      max-height: 300px;

      .slide {
        height: 300px;
      }

      img {
        /* max-height: 500px; */
        /* -ms-transform: translate(-100%, -40%); */
        transform: translate(0, -25%);
      }
    }
  }
  @media (min-width: 900px) {
    div {
      max-height: 350px;

      .slide {
        height: 350px;
      }

      img {
        /* max-height: 500px; */
        /* -ms-transform: translate(-100%, -40%); */
        transform: translate(0, -30%);
      }
    }
  }
  @media (min-width: 1100px) {
    div {
      max-height: 400px;

      .slide {
        height: 400px;
      }

      img {
        /* max-height: 500px; */
        /* -ms-transform: translate(-100%, -40%); */
        transform: translate(0, -35%);
      }
    }
  }
  @media (min-width: 1400px) {
    div {
      max-height: 500px;

      .slide {
        height: 500px;
      }

      img {
        /* max-height: 500px; */
        /* -ms-transform: translate(-100%, -40%); */
        transform: translate(0, -30%);
      }
    }
  }
  @media (min-width: 1600px) {
    div {
      max-height: 600px;

      .slide {
        height: 600px;
      }

      img {
        /* max-height: 500px; */
        /* -ms-transform: translate(-100%, -40%); */
        transform: translate(0, -30%);
      }
    }
  }
  @media (min-width: 1920px) {
    div {
      max-height: 700px;

      .slide {
        height: 700px;
      }

      img {
        /* max-height: 500px; */
        /* -ms-transform: translate(-100%, -40%); */
        transform: translate(0, -30%);
      }
    }
  }
`;
