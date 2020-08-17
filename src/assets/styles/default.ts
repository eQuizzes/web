import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100vh;
}

body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Ubuntu', sans-serif;
  line-height: 1.2;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

a {
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 1.8rem;
  text-shadow: ${({ theme }) => theme.shadows.item};
}

button {
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.container};
  display: flex;
  justify-content: space-between;
}

button:focus {
  outline: none;
}

div, section, article, footer, #root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`;
