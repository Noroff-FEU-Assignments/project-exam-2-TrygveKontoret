import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHamburger,
  StyledHeader,
  StyledBurgerNav,
} from "./NavigationStyles";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Search from "../search/Search";

const Navigation = () => {
  const bar1Ref = useRef();
  const bar2Ref = useRef();
  const bar3Ref = useRef();
  const [open, setOpen] = useState(false);

  const [auth, setAuth] = useContext(AuthContext);
  const toggleOpen = () => {
    setOpen(!open);
    bar1Ref.current.classList.toggle("change1");
    bar2Ref.current.classList.toggle("change2");
    bar3Ref.current.classList.toggle("change3");
  };

  // const loggedIn = () => {
  //   setAuth(auth);
  // };

  // {!auth return}

  return (
    <>
      <StyledHeader>
        <div className="logo">
          <svg
            width="74"
            height="55"
            viewBox="0 0 74 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip="url(#clip0_112_15)">
              <path
                d="M-34.65 22L-18.51 2.38L-0.819992 21.62L20.73 -3.13L42.82 21.54L58.81 0.880005L73.29 22L89.85 3.48L106.59 21.54L130.15 -9.62L150.96 21.92L167.52 -3.93999L183.8 20.2L200 -3.62L217.73 20.36L231.52 -0.199995L243.8 21.92V54.43H-34.65V22Z"
                fill="white"
              />
              <path
                d="M33.56 22.12V50H29.92V37.36H15.72V50H12.08V22.12H15.72V34.36H29.92V22.12H33.56ZM48.4553 22.12C51.4953 22.12 54.122 22.6933 56.3353 23.84C58.5753 24.96 60.282 26.5733 61.4553 28.68C62.6553 30.7867 63.2553 33.2667 63.2553 36.12C63.2553 38.9733 62.6553 41.4533 61.4553 43.56C60.282 45.64 58.5753 47.24 56.3353 48.36C54.122 49.4533 51.4953 50 48.4553 50H39.7753V22.12H48.4553ZM48.4553 47C52.0553 47 54.802 46.0533 56.6953 44.16C58.5886 42.24 59.5353 39.56 59.5353 36.12C59.5353 32.6533 58.5753 29.9467 56.6553 28C54.762 26.0533 52.0286 25.08 48.4553 25.08H43.4153V47H48.4553Z"
                fill="#293070"
              />
            </g>
            <defs>
              <clipPath id="clip0_112_15">
                <rect width="74" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="searchbar">
          <Search />
          {/* <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <p>Go</p>
          </div> */}
        </div>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/allhotels">
              <li>Hotels</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            {!auth ? (
              <Link to="/login">
                <li>Login</li>
              </Link>
            ) : (
              <Link to="/admin">
                <li>Admin</li>
              </Link>
            )}
          </ul>
        </nav>
        <StyledHamburger onClick={toggleOpen}>
          <div className="bar1" ref={bar1Ref}></div>
          <div className="bar2" ref={bar2Ref}></div>
          <div className="bar3" ref={bar3Ref}></div>
        </StyledHamburger>
      </StyledHeader>
      <AnimatePresence>
        {open && (
          <StyledBurgerNav
            initial={{
              y: "120%",
            }}
            animate={{ y: "0" }}
            exit={{ y: "-150%" }}
          >
            {/* <div className="searchbar">
              <Search />
            </div> */}
            <ul>
              <Link to="/" onClick={toggleOpen}>
                <li>Home</li>
              </Link>
              <Link to="/allhotels" onClick={toggleOpen}>
                <li>Hotels</li>
              </Link>
              <Link to="/contact" onClick={toggleOpen}>
                <li>Contact</li>
              </Link>
              {!auth ? (
                <Link to="/login" onClick={toggleOpen}>
                  <li>Log in</li>
                </Link>
              ) : (
                <Link to="/admin" onClick={toggleOpen}>
                  <li>Admin</li>
                </Link>
              )}
            </ul>
          </StyledBurgerNav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
