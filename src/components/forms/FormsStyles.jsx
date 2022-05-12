import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  input,
  textarea {
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
`;

// export const StyledLogin = styled.form``;
