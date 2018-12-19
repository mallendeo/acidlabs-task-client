import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

import AppCard from '../components/WeatherCard'
import { IMAGES } from '../fixtures'

const getBg = (city, size = 400) => {
  if (city && IMAGES[city]) {
    const qry = `?auto=format&fit=crop&w=${size}&q=60`
    const index = Math.round(Math.random())
    return `url(${IMAGES[city][index]}${qry})`
  }
}

const transition = { type: 'spring', stiffness: 100 }

const List = posed.ul({
  show: { staggerChildren: 50 },
  initialPose: 'hide'
})

const ListItem = posed.li({
  show: { opacity: 1, y: '0rem', transition },
  hide: { opacity: 0, y: '2rem', transition }
})

const WeatherSection = ({ forecast, className }) => {
  const withImages = forecast.map(item => ({
    ...item,
    bg: getBg(item.city)
  }))

  const [init, setInit] = useState(false)

  useEffect(() => {
    !init && setInit(true)
    return null
  })

  return (
    <List
      pose={init ? 'show' : 'hide'}
      className={className}>
      {withImages.map(item =>
        <ListItem key={item.city}>
          <AppCard
            bg={item.bg}
            title={item.city}
            timezone={item.tz}
            forecast={item.forecast} />
        </ListItem>
      )}
    </List>
  )
}

export default styled(WeatherSection)`
  display: grid;
  list-style: none;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`
