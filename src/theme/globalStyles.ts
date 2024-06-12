import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
                'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.2s linear;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .page {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .page-enter {
    opacity: 0;
  }

  .page-enter-active {
    opacity: 1;
  }

  .page-exit {
    opacity: 1;
  }

  .page-exit-active {
    opacity: 0;
  }
`;

export const lightTheme = {
  body: '#FFF',
  card: '#e6e6e7',
  nav: '#D1C4E9',
  navLink: '#ffffff',
  navLinkHover: '#512DA8',
  navLinkActive: '#673AB7',
  text: '#363537',
  tableHead: '#4caf50',
  tableHeaderTextColor: '#ffffff',
  tableBodyTextColor: '#8b8b8b',
  tableBody: '#ffffff',
  tableRowEven: '#f2f2f2',
};
export const darkTheme = {
  body: '#363537',
  card: '#444446',
  nav: '#512DA8',
  navLink: '#ffffff',
  navLinkHover: '#388E3C',
  navLinkActive: '#4CAF50',
  text: '#FAFAFA',
  tableHead: '#a0d39c',
  tableHeaderTextColor: '#121212',
  tableBodyTextColor: '#ffffff',
  tableBody: '#8b8b8b',
  tableRowEven: '#3f3f3f',
};

const sizes = {
  mobile: '450px',
  tablet: '768px',
  desktop: '1024px',
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export default GlobalStyle;
