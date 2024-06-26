import { createGlobalStyle } from 'styled-components'

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Roboto", sans-serif;

    .container {
      max-width: 360px;
      width: 100%;
      margin: 0 auto;
      padding: 16px 16px 0;
    }
  }
`

export default Globalstyle
