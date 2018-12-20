import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import io from 'socket.io-client'

import BarLoader from 'react-spinners/BarLoader'

import WeatherSection from './containers/WeatherSection'

const {
  REACT_APP_API_HOST = 'https://acidlabs-api.herokuapp.com',
  REACT_APP_API_PORT = 3000,
  NODE_ENV
} = process.env

const HOST = NODE_ENV === 'production'
  ? REACT_APP_API_HOST
  : `http://localhost:${REACT_APP_API_PORT}`

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

  useEffect(() => {
    socket.on('forecast', setForecast)
    return null
  }, [])

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
