import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        li {
            color: black;
        }
    }
`;

export default GlobalStyles;
