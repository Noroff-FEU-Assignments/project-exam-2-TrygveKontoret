import styled from "styled-components";

export const StyledUnauthorized = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;

  p {
    padding: 20px 0;
  }

  button {
    margin: 10px 0;
    padding: 10px 20px;
  }
`;

export const StyledMessage = styled.div`
  width: 100%;
  h2 {
    margin-left: 25px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    margin: 10px auto;

    .card {
      /* display: flex;
      flex-direction: column;
      align-items: center; */
      padding: 10px;
      transition: 0.5s;
      border: 1px solid black;
      border-radius: 5px;
      margin: 25px;

      button {
        width: 50%;
        padding: 10px;
        background-color: red;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        cursor: pointer;
      }

      p {
        max-width: 300px;
      }
    }
  }
`;

export const StyledAdmin = styled.div`
  h1 {
    text-align: center;
    margin: 30px 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin: 10px;
      width: 30%;
      padding: 15px;
      border: none;
      border-radius: 5px;
      background-color: #86cd82;
      color: black;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .logout {
    margin: 10px;
    width: 30%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    /* border: 2px solid black; */
    font-size: 18px;
    cursor: pointer;

    /* &:hover {
      border: 2px solid #293070;
      transition: 0.5s;
    } */
  }

  @media (max-width: 776px) {
    div {
      flex-wrap: wrap;

      button {
        width: 250px;
      }
    }
  }
`;