import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: 30px;

  h2 {
    margin-top: 30px;
    padding-left: 25px;
    font-size: 35px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    margin-top: 30px;
    /* padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */

    .card {
      padding: 10px;
      /* margin-bottom: 30px; */
      transition: 0.5s;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 5px;
      margin: 25px;
      /* width: 24%;
      margin-bottom: 1rem; */

      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
      }

      h3 {
        /* text-align: center; */
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
    }
  }
`;
