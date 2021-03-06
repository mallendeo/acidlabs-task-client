import React from 'react'
import styled from 'styled-components'

import DropletIcon from 'react-feather/dist/icons/droplet'
import ThermometherIcon from 'react-feather/dist/icons/thermometer'
import UmbrellaIcon from 'react-feather/dist/icons/umbrella'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Details = styled(Row)`
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

const Time = styled.strong`
  font-size: 1.5rem;
  margin: auto;
`

const AppCard = ({ title, forecast, time, ...props }) => {
  return (
    <div {...props}>
      <Row>
        <strong>{title}</strong>
        <small>{forecast.summary}</small>
      </Row>

      <Time>{time}</Time>

      <Details>
        <small><ThermometherIcon size={16} /> {forecast.temperature}&deg;C</small>
        <small><DropletIcon size={16} /> {forecast.humidityP}%</small>
        <small><UmbrellaIcon size={16} /> {forecast.precipProbabilityP}%</small>
      </Details>
    </div>
  )
}

export default styled(AppCard)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  min-height: 12rem;

  background:
    linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.2)),
    ${({ bg }) => bg || '#f9f9f9'};
  background-size: cover;
  color: ${({ bg }) => bg ? 'white' : '#222'};

  border-radius: ${({ rounded }) => rounded ? '.8rem' : '0'};

  word-break: break-all;
  overflow: hidden;

  will-change: opacity, transform;
`
