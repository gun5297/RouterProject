import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: "Noto Sans KR";

  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
`;

export default GlobalStyle;
