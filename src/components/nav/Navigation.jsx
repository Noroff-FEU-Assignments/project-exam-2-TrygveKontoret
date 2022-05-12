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
            width="95"
            height="93"
            viewBox="0 0 95 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8952 51.4357L46.8153 80.4818C47.1397 80.7866 47.302 80.939 47.5 80.939C47.698 80.939 47.8602 80.7866 48.1847 80.4818L79.1048 51.4357C84.7755 46.1086 87.6108 43.4451 87.8835 39.9741C88.1562 36.5032 85.7715 33.4296 81.0021 27.2824L77.2593 22.4583C70.1327 13.2729 66.5693 8.68017 62.1295 9.15828C57.6896 9.6364 55.1858 14.8825 50.1782 25.3746L49.3049 27.2043C48.5222 28.8444 48.1308 29.6645 47.5 29.6645C46.8692 29.6645 46.4778 28.8444 45.695 27.2043L44.8217 25.3746C39.8141 14.8825 37.3103 9.6364 32.8705 9.15828C28.4306 8.68017 24.8673 13.2729 17.7407 22.4583L13.9978 27.2824C9.22847 33.4296 6.8438 36.5032 7.11647 39.9741C7.38913 43.4451 10.2245 46.1086 15.8952 51.4357Z"
              stroke="#2F80ED"
            />
            <path
              d="M38.9336 51.3213C38.5 51.9424 37.8936 52.4082 37.1143 52.7188C36.3408 53.0234 35.4385 53.1758 34.4072 53.1758C33.3643 53.1758 32.4385 52.9326 31.6299 52.4463C30.8213 51.9541 30.1943 51.2568 29.749 50.3545C29.3096 49.4521 29.084 48.4062 29.0723 47.2168V46.1006C29.0723 44.1729 29.5205 42.6787 30.417 41.6182C31.3193 40.5576 32.585 40.0273 34.2139 40.0273C35.5498 40.0273 36.625 40.3701 37.4395 41.0557C38.2539 41.7354 38.752 42.7021 38.9336 43.9561H37.2461C36.9297 42.2627 35.9219 41.416 34.2227 41.416C33.0918 41.416 32.2334 41.8145 31.6475 42.6113C31.0674 43.4023 30.7744 44.5508 30.7686 46.0566V47.1025C30.7686 48.5381 31.0967 49.6807 31.7529 50.5303C32.4092 51.374 33.2969 51.7959 34.416 51.7959C35.0488 51.7959 35.6025 51.7256 36.0771 51.585C36.5518 51.4443 36.9443 51.207 37.2549 50.873V47.999H34.293V46.6279H38.9336V51.3213ZM43.4424 47.9902V53H41.7549V40.2031H46.4746C47.875 40.2031 48.9707 40.5605 49.7617 41.2754C50.5586 41.9902 50.957 42.9365 50.957 44.1143C50.957 45.3564 50.5674 46.3145 49.7881 46.9883C49.0146 47.6562 47.9043 47.9902 46.457 47.9902H43.4424ZM43.4424 46.6104H46.4746C47.377 46.6104 48.0684 46.3994 48.5488 45.9775C49.0293 45.5498 49.2695 44.9346 49.2695 44.1318C49.2695 43.3701 49.0293 42.7607 48.5488 42.3037C48.0684 41.8467 47.4092 41.6094 46.5713 41.5918H43.4424V46.6104ZM62.1191 40.2031V48.9043C62.1133 50.1113 61.7324 51.0986 60.9766 51.8662C60.2266 52.6338 59.207 53.0645 57.918 53.1582L57.4697 53.1758C56.0693 53.1758 54.9531 52.7979 54.1211 52.042C53.2891 51.2861 52.8672 50.2461 52.8555 48.9219V40.2031H54.5254V48.8691C54.5254 49.7949 54.7803 50.5156 55.29 51.0312C55.7998 51.541 56.5264 51.7959 57.4697 51.7959C58.4248 51.7959 59.1543 51.541 59.6582 51.0312C60.168 50.5215 60.4229 49.8037 60.4229 48.8779V40.2031H62.1191Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <p>Go</p>
          </div>
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
            <div className="searchbar">
              <input type="text" placeholder="Search" />
              <div className="searchbtnBurger">
                <p>Go</p>
              </div>
            </div>
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
