import styled from "styled-components";

export const StyledRoom = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;

    .card {
      margin: 30px;
    }
  }
`;