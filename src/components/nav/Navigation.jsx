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

          {/* <svg
            width="284"
            height="69"
            viewBox="0 0 284 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_104_7)">
              <path
                d="M5.35 35L21.49 15.38L39.18 34.62L60.73 9.87L82.82 34.54L98.81 13.88L113.29 35L129.85 16.48L146.59 34.54L170.15 3.38L190.96 34.92L207.52 9.06001L223.8 33.2L240 9.38L257.73 33.36L271.52 12.8L283.8 34.92V67.43H5.35V35Z"
                fill="#293070"
              />
              <path
                d="M48.5227 65V35.9091H52.0455V48.8636H67.5568V35.9091H71.0795V65H67.5568V51.9886H52.0455V65H48.5227ZM102.678 50.4545C102.678 53.5227 102.124 56.1742 101.016 58.4091C99.9077 60.6439 98.3878 62.3674 96.456 63.5795C94.5241 64.7917 92.3177 65.3977 89.8366 65.3977C87.3556 65.3977 85.1491 64.7917 83.2173 63.5795C81.2855 62.3674 79.7656 60.6439 78.6577 58.4091C77.5497 56.1742 76.9957 53.5227 76.9957 50.4545C76.9957 47.3864 77.5497 44.7348 78.6577 42.5C79.7656 40.2652 81.2855 38.5417 83.2173 37.3295C85.1491 36.1174 87.3556 35.5114 89.8366 35.5114C92.3177 35.5114 94.5241 36.1174 96.456 37.3295C98.3878 38.5417 99.9077 40.2652 101.016 42.5C102.124 44.7348 102.678 47.3864 102.678 50.4545ZM99.2685 50.4545C99.2685 47.9356 98.8471 45.8097 98.0043 44.0767C97.1709 42.3438 96.0393 41.0322 94.6094 40.142C93.1889 39.2519 91.598 38.8068 89.8366 38.8068C88.0753 38.8068 86.4796 39.2519 85.0497 40.142C83.6293 41.0322 82.4976 42.3438 81.6548 44.0767C80.8215 45.8097 80.4048 47.9356 80.4048 50.4545C80.4048 52.9735 80.8215 55.0994 81.6548 56.8324C82.4976 58.5653 83.6293 59.8769 85.0497 60.767C86.4796 61.6572 88.0753 62.1023 89.8366 62.1023C91.598 62.1023 93.1889 61.6572 94.6094 60.767C96.0393 59.8769 97.1709 58.5653 98.0043 56.8324C98.8471 55.0994 99.2685 52.9735 99.2685 50.4545ZM108.601 65V35.9091H112.124V61.875H125.646V65H108.601ZM134.624 35.9091V65H131.101V35.9091H134.624ZM150.664 65H141.687V35.9091H151.062C153.884 35.9091 156.299 36.4915 158.306 37.6562C160.314 38.8116 161.853 40.4735 162.923 42.642C163.993 44.8011 164.528 47.3864 164.528 50.3977C164.528 53.428 163.988 56.0369 162.908 58.2244C161.829 60.4025 160.257 62.0786 158.192 63.2528C156.128 64.4176 153.619 65 150.664 65ZM145.21 61.875H150.437C152.842 61.875 154.835 61.411 156.417 60.483C157.998 59.5549 159.177 58.2339 159.954 56.5199C160.73 54.8059 161.119 52.7652 161.119 50.3977C161.119 48.0492 160.735 46.0275 159.968 44.3324C159.201 42.6278 158.055 41.321 156.531 40.4119C155.006 39.4934 153.107 39.0341 150.835 39.0341H145.21V61.875ZM170.263 65H166.57L177.251 35.9091H180.888L191.57 65H187.876L179.183 40.5114H178.956L170.263 65ZM171.626 53.6364H186.513V56.7614H171.626V53.6364ZM195.135 65V62.4432L210.817 39.0341H194.964V35.9091H215.021V38.4659L199.339 61.875H215.192V65H195.135ZM221.101 65V35.9091H238.658V39.0341H224.624V48.8636H237.749V51.9886H224.624V61.875H238.885V65H221.101Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_104_7">
                <rect width="283.8" height="68.84" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
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
