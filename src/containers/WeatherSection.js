import React from 'react'
import styled from 'styled-components'

import AppCard from '../components/WeatherCard'

const WeatherSection = ({ forecast, className }) => {
  return (
    <ul className={className}>
      {forecast.map(item =>
        <li key={item.city}>
          <AppCard
            title={item.city}
            timezone={item.tz} />
        </li>
      )}
    </ul>
  )
}

export default styled(WeatherSection)`
  display: grid;
  list-style: none;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`
