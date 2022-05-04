import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export const CarouselWrapper = styled(CarouselProvider)`
  background-size: cover;
  background-position: center;
`;

export const StyledSlide = styled(Slide)`
  img {
    position: absolute;
    top: -130%;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
  }
`;
