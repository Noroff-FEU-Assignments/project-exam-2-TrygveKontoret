import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  input {
    width: 80%;
    padding: 5px;

    outline: none;
    border-radius: 5px;
  }
`;

export const StyledSearch = styled.div`
  position: absolute;
  top: 7%;
  width: 40%;
  z-index: 9999;

  .searchRes {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* z-index: 999999; */
    background-color: white;
    border: 1px solid black;

    h4 {
      padding-left: 30px;
    }

    .imgCont {
      height: 80px;
      width: 80px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
