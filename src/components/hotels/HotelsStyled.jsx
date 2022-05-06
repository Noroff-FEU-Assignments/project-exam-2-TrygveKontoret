import styled from "styled-components";

export const StyledMain = styled.main`
  margin-top: 30px;

  h2 {
    margin-top: 30px;
    /* padding-left: 25px; */
    font-size: 35px;
    width: 80%;
    margin: auto;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80%;

    .card {
      display: flex;
      flex-direction: row;
      border: 2px solid pink;
      margin: 20px 0;

      .imgCont {
        height: 300px;
        width: 400px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
