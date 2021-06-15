import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
    box-sizing: border-box;
  }

  button:hover {
    cursor: pointer;
  }

  .App {
    min-height: 100vh;
    background-color: #ffffff;
    padding: 20px 0 50px 30px;
    font-family: 'Open Sans', sans-serif;
  }

  .App-header {
    background-color: #181c21;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 15px 0 20px 20px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;
  color: white;
  padding: 0;
  margin-bottom: 5px;
  font-size: 12px;
  margin-left: ${props => `${props.depth * 15}px`};
  i {
    margin-right: 15px;
  }
`;

export default GlobalStyles;
