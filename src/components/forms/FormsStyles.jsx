import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  /* border: 2px solid black; */
  border-radius: 5px;
  width: 500px;
  /* height: 100%; */
  transition: 0.5s;

  .cross {
    display: flex;
    justify-content: end;
    width: 100%;
    padding-right: 30px;
    cursor: pointer;
  }

  .success {
    color: green;
    font-size: 25px;
  }

  label {
    display: flex;
    justify-content: flex-start;
    width: 250px;
    margin: 10px 0 3px 0;
    font-size: 23px;
  }
  h2 {
    width: 250px;
  }

  input,
  textarea,
  select {
    width: 250px;
    padding: 5px 0;
  }

  span {
    color: red;
    font-weight: bold;
  }

  button {
    /* background-color: green; */
    border: 2px solid blue;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  backdrop-filter: blur(5px);
  /* overflow: hidden;
  overflow-x: black; */
  transition: 0.5s;

  /* .StyledForm {
    width: 80%;
    height: 80%;
  } */
`;
