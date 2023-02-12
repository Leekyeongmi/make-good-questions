import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *,
  :after,
  :before {
    margin: 0;
    box-sizing: border-box;
  };

  html {
    color: black;
    font-size: 16px;   
  };

  button, input, textarea, select {
    padding: 0;
    border: none;
    outline: none;
    background-color: inherit;
  };

  button {
    cursor: pointer;
    :active,
    :hover,
    :focus {
    outline: none;
    }
  };
`;
export default GlobalStyles;
