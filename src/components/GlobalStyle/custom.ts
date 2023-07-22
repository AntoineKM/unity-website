import { css } from "styled-components";

const customCss = css`
  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
      "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
    background-color: #202122;
  }

  body,
  span,
  input,
  button,
  textarea,
  select,
  option {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #fff;
    line-height: 1.25;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default customCss;
