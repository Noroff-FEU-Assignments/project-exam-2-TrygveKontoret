import styled from "styled-components";

export const StyledDetails = styled.main`
  display: flex;
  .carouselCont {
    max-width: 50%;
    padding-left: 30px;
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

    button {
      width: 25%;
      padding: 10px;
      border: 2px solid pink;
      border-radius: 5px;
      background-color: green;
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .carouselCont {
      max-width: 90%;
      padding: 0;
    }
    .hotelDesc {
      width: 90%;
    }
  }
`;
