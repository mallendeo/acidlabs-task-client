import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import io from 'socket.io-client'

import WeatherSection from './containers/WeatherSection'

const HOST = process.env.NODE_ENV === 'production'
  ? 'https://acidlabs-api.herokuapp.com'
  : 'http://localhost:3000'

const socket = io(HOST)

const Wrapper = styled.div`
  max-width: 50rem;
  width: 100%;
  margin: auto;
  padding: 2rem;
`

const Title = styled.h1`
  color: #444;
  margin-bottom: 4rem;
`

const GlobalStyle = createGlobalStyle`
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

const App = () => {
  const [forecast, setForecast] = useState([])

  socket.on('forecast', setForecast)

  return (
    <Wrapper>
      <Title>Acid Labs Task</Title>
      <WeatherSection forecast={forecast} />

      <GlobalStyle />
    </Wrapper>
  )
}

export default App
