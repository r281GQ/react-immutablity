import React from 'react';
import ReactDOM from 'react-dom';
import Grandparent from './Grandparent';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    html {
      font-family: sans-serif;      
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
    }

    body,
    h1, h2, h3, h4, h5, h6,
    blockquote, p, pre,
    dl, dd, ol, ul,
    figure,
    hr,
    fieldset, legend {
      margin:  0;
      padding: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul, ol {
      list-style: none;
    }

    img {
      display: inline-block;
      vertical-align: top;
    }
`;

const GlobalStyles = createGlobalStyle`

 html {
      height: 100%;
      width: 100%;
      max-height: 100%;
      max-width: 100%;
      display: flex;
      font-size: 16px;
      line-height: 1.5;
      font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';  
      font-weight: 400;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -moz-font-smoothing: antialiased;
    }

    body {
      display: flex;
      flex: auto;
      max-width: 100%;
      max-height: 100%;
      align-self: stretch;
      -webkit-overflow-scrolling: touch;
    }
    
    #root {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
    }

    [role=group] {
      min-height: 100vh;
    }

`;

ReactDOM.render(
  <ThemeProvider theme={{}}>
    <React.Fragment>
      <ResetStyles />
      <GlobalStyles />
      <Grandparent />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
