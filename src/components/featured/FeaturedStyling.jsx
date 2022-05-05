import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  .card {
    padding: 10px;
    margin: 30px;

    h3 {
      text-align: center;
      padding-bottom: 10px;
    }

    .imgCont {
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .rating {
      display: flex;
    }
  }
`;
