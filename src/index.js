import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Fira Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>,
  document.getElementById('root')
)
