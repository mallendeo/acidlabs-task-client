import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './App'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Fira Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, ul, li {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box
  }
`

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>,
  document.getElementById('root')
)
