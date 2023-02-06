import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const scroll = css`
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: 0;
    border-radius: 10px;
    background: ${(props) => props.theme.scrollbar.colorTrack};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollbar.colorThumb};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.scrollbar.colorThumbHover};
  }
`;

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.default.background};
    color: ${(props) => props.theme.default.color};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    line-height: 20px;
  }

  a {
    text-decoration: none;
    color: initial;
  }
`;