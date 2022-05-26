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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  margin: 10px;

  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    max-width: 300px;
    padding: 10px;

    p {
      max-width: 300px;
    }
  }
`;
