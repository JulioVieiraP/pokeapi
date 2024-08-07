import { createGlobalStyle } from 'styled-components'
import { Colors } from './Cores'

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Roboto", sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    background-color: ${Colors.primary};
  }

  .container {
    max-width: 375px;
    width: 100%;
    margin: 0 auto;
    padding: 16px 16px 0;
  }
`

export default Globalstyle
