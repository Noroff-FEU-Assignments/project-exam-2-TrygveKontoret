import styled from "styled-components";
import { motion } from "framer-motion";

const motionNav = motion.nav;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  .logo {
    width: 25%;
  }

  .searchbar {
    display: flex;
    width: 40%;
    @media (max-width: 768px) {
      width: 60%;
    }

    input {
      width: 80%;
      padding: 5px;
      /* border: none; */
      outline: none;
    }
    .searchbtn {
      padding: 5px 15px;
      border: 1px solid black;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: right;

      li {
        margin: 20px;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledHamburger = styled.div`
  margin-right: 20px;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change2 {
    opacity: 0;
  }

  .change3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-10px, -7px);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledBurgerNav = styled(motionNav)`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  background-color: lightblue;
  height: 100vh;

  .searchbar {
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; */
    width: 100%;
    margin-bottom: 20px;

    input {
      display: flex;
      justify-content: center;
      width: 50%;
      padding: 5px;
      margin: 10px auto;
    }

    .searchbtnBurger {
      padding: 5px 15px;
      border: 1px solid black;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    align-items: center;
    width: 100%;

    a {
      border-bottom: 1px solid black;
      width: 100%;
      padding: 30px 0;

      li {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0px 0;
        /* padding: 30px; */
      }
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
