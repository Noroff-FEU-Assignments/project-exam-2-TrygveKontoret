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
      /* align-items: center; */
      /* border: 2px solid pink; */
      margin: 20px 0;
      width: 100%;
      border-radius: 10px 0px 0px 10px;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

      .textCont {
        display: flex;
        flex-direction: column;
        /* justify-content: space-evenly; */
        margin-left: 20px;
        width: 60%;

        h3 {
          margin-top: 10px;
        }

        .stars {
          margin: 5px 0 10px 0;
        }

        .desc {
          width: 80%;
        }
        .rating {
          display: flex;
          flex-direction: row;
          margin-top: 20px;

          p {
            padding-right: 5px;
          }
        }
      }

      .imgCont {
        height: 300px;
        width: 40%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px 0px 0px 10px;
          object-fit: cover;
        }
      }
    }
  }
`;
