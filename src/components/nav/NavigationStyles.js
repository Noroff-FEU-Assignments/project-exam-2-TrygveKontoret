import styled from "styled-components";
import { motion } from "framer-motion";

const motiondiv = motion.div;

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledHamburger = styled(motiondiv)`
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
`;

export const StyledBurgerNav = styled.nav``;
