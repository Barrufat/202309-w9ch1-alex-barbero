import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

body {
  margin: 0;
  background-color: #4c4441;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input {
  font-family: inherit;
}

h1,
h2 {
  margin: 0;
  color: #ffffff;
}

button {
  cursor: pointer;
}

.films-box {
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
}

.link{
  margin-top:20px;
  border: none;
  border-radius: 15px;
  flex-shrink: 0;
  background-color: #fff;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  padding: 10px;
  cursor: pointer;
  color: #4c4441;
  font-weight: 700;
  font-size: 19px;
}
`;

export default GlobalStyle;
