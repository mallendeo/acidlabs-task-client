import React from 'react'
import styled from 'styled-components'

const WeatherCard = ({ title, timezone, className }) => {
  return (
    <div className={className}>
      <span>{title}</span>
      <strong>{timezone}</strong>
    </div>
  )
}

export default styled(WeatherCard)`
  border-radius: .8rem;
  padding: 1.5rem;
  background: #f9f9f9;
  width: 100%;
  word-break: break-all;
  overflow: hidden;
`
