import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHamburger,
  StyledBurgerNav,
  StyledNav,
} from "./NavigationStyles";
import { useState, useRef } from "react";

const Navigation = () => {
  const bar1Ref = useRef();
  const bar2Ref = useRef();
  const bar3Ref = useRef();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    bar1Ref.current.classList.toggle("change1");
    bar2Ref.current.classList.toggle("change2");
    bar3Ref.current.classList.toggle("change3");
  };
  // console.log(titleRef)

  return (
    <>
      <header>
        <StyledNav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/allhotels">
              <li>All Hotels</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </StyledNav>
        <StyledHamburger onClick={toggleOpen}>
          <div className="bar1" ref={bar1Ref}></div>
          <div className="bar2" ref={bar2Ref}></div>
          <div className="bar3" ref={bar3Ref}></div>
        </StyledHamburger>
        {open && (
          <StyledBurgerNav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/allhotels">
                <li>All Hotels</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </StyledBurgerNav>
        )}
      </header>
    </>
  );
};

export default Navigation;
