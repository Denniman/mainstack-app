import { css, createGlobalStyle } from "styled-components";

// prettier-ignore
export const reset = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  border: 0;
  padding: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
a {
  text-decoration: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
`

const GlobalStyle = createGlobalStyle`${reset}

@media (orientation: landscape) {
    ::-webkit-scrollbar {
      width: 8px;
      transition: background 350ms ease 0s;
      background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
    }

    ::-webkit-scrollbar-track {
      transition: background 350ms ease 0s;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      transition: background 350ms ease 0s;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
    }
    }


  html, 
  body, 
  #root{
    line-height: 1.5;
    font-weight: 400;
    font-size: 50%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
    font-family: ${({ theme }) => theme.fonts.TestSöhne};
    overflow-x: hidden; 
  

    input:focus,
    select:focus,
    button:focus,
    textarea:focus,
    input[type=button]:focus,
    input.form-control:focus {
      box-shadow: none;
      -moz-box-shadow: none;
      outline:none !important;
      -webkit-box-shadow: none;
      outline-width: 0 !important;
    }

    /* Change autocomplete styles in WebKit */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.BLACK_COLOR};
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) =>
        theme.colors.TRANSPARENT_COLOR} inset;
    }

      
      @media (min-width: ${({ theme }) => theme.breakpoints.LARGE_VIEWPORT}) {
        font-size: 62.5%; 
      }

  
  }
`;

export default GlobalStyle;
