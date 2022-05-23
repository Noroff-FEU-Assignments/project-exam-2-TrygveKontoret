import styled from "styled-components";

export const StyledDetails = styled.main`
  display: flex;
  .carouselCont {
    max-width: 50%;
  }
  .hotelDesc {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 20px;

    .stars {
      margin: 10px 0;
    }

    .ratings {
      display: flex;
      margin: 10px 0;

      p {
        margin-right: 10px;
      }
    }
  }
`;
