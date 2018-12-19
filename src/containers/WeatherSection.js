import React, { useState, useEffect } from 'react'

import AppList from '../components/AppList'
import { IMAGES } from '../fixtures'

const getBg = (city, size = 400) => {
  if (city && IMAGES[city]) {
    const qry = `?auto=format&fit=crop&w=${size}&q=60`
    const index = Math.round(Math.random())

    return `url(${IMAGES[city][index]}${qry})`
  }
}

const WeatherSection = ({ forecast, className }) => {
  const withImages = forecast.map(item => ({
    ...item,
    bg: getBg(item.city)
  }))

  const [init, setInit] = useState(false)

  useEffect(() => {
    !init && setInit(true)
    return null
  }, [])

  return (
    <AppList
      show={init}
      forecast={withImages}
      className={className} />
  )
}

export default WeatherSection
