import React, { useState } from 'react'
import styled from 'styled-components'
import io from 'socket.io-client'

import BarLoader from 'react-spinners/BarLoader'

import WeatherSection from './containers/WeatherSection'

const HOST = process.env.NODE_ENV === 'production'
  ? 'https://acidlabs-api.herokuapp.com'
  : 'http://localhost:3000'

const socket = io(HOST)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 2rem;
`

const Title = styled.h1`
  color: #444;
  margin-bottom: 4rem;
`

const App = () => {
  const [forecast, setForecast] = useState([])

  socket.on('forecast', setForecast)

  return (
    <Wrapper>
      <Title>Acid Labs Task</Title>
      {!forecast.length
        ? <div style={{ margin: 'auto' }} ><BarLoader /></div>
        : <WeatherSection forecast={forecast} />
      }
    </Wrapper>
  )
}

export default App
