import React from 'react'
import styled from 'styled-components'

import DropletIcon from 'react-feather/dist/icons/droplet'
import ThermometherIcon from 'react-feather/dist/icons/thermometer'
import UmbrellaIcon from 'react-feather/dist/icons/umbrella'

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 0;

  small {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 3rem;
  }

  svg {
    margin-bottom: .5rem;
  }
`

const WeatherCard = ({ title, timezone, forecast, ...props }) => {
  return (
    <div {...props}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>{title}</strong>
        <span>{forecast.summary}</span>
      </div>

      <small style={{ marginTop: 8, opacity: 0.7 }}>
        <strong>Timezone: </strong>{timezone}
      </small>

      <Details>
        <small><ThermometherIcon size={16} /> {forecast.temperature}&deg;C</small>
        <small><DropletIcon size={16} /> {forecast.humidity}%</small>
        <small><UmbrellaIcon size={16} /> {forecast.precipProbability}%</small>
      </Details>
    </div>
  )
}

export default styled(WeatherCard)`
  border-radius: .8rem;
  padding: 1.5rem;
  background:
    linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.2)),
    ${props => props.bg || '#f9f9f9'};
  background-size: cover;
  color: ${props => props.bg ? 'white' : '#222'};
  width: 100%;
  min-height: 12rem;
  word-break: break-all;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  will-change: opacity, transform;
`
