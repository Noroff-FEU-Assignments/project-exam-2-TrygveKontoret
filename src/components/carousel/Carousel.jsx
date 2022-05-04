import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import bergen1 from "../../media/bergen1.jpg";
import bergen2 from "../../media/bergen2.jpg";
import bergen3 from "../../media/bergen3.jpg";
import { CarouselWrapper, StyledSlide } from "./CarouselStyles";

export const Carousel = () => {
  return (
    <CarouselWrapper
      naturalSlideWidth={100}
      naturalSlideHeight={20}
      totalSlides={3}
      infinite={true}
      dragEnabled={true}
      touchEnabled={true}
      isPlaying={true}
      interval={5000}
    >
      <Slider>
        <StyledSlide index={0}>
          <img src={bergen1} alt="" />
        </StyledSlide>
        <StyledSlide index={1}>
          <img src={bergen2} alt="" />
        </StyledSlide>
        <StyledSlide index={2}>
          <img src={bergen3} alt="" />
        </StyledSlide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselWrapper>
  );
};
