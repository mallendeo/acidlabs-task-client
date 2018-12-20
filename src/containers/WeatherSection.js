import React, { useState, useEffect, Fragment } from 'react'
import MaximizeIcon from 'react-feather/dist/icons/maximize'

import AppList from '../components/AppList'
import AppButton from '../components/AppButton'

import { IMAGES } from '../fixtures'

const getBg = (city, size = 600) => {
  if (city && IMAGES[city]) {
    const qry = `?auto=format&fit=crop&w=${size}&q=80`
    const index = Math.round(Math.random())

    return `url(${IMAGES[city][index]}${qry})`
  }
}

const WeatherSection = ({ forecast, className }) => {
  const withImages = forecast.map(item => ({
    ...item,
    bg: getBg(item.city),
    forecast: {
      ...item.forecast,
      humidityP: Math.round(item.forecast.humidity * 100),
      precipProbabilityP: Math.round(item.forecast.precipProbability * 100)
    }
  }))

  const [init, setInit] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen && document.exitFullscreen()
    }

    setFullscreen(!fullscreen)
  }

  useEffect(() => {
    setInit(true)
    return null
  }, [])

  return (
    <Fragment>
      <AppButton
        style={{ alignSelf: 'flex-end', marginBottom: 32 }}
        onClick={toggleFullscreen}>
        <MaximizeIcon size={24} />
      </AppButton>

      <AppList
        onClick={toggleFullscreen}
        fullscreen={fullscreen}
        show={init}
        forecast={withImages}
        className={className} />
    </Fragment>
  )
}

export default WeatherSection
