import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

import AppCard from './AppCard'

const transition = { type: 'spring', stiffness: 100 }

const List = posed.ul({
  show: { staggerChildren: 50 },
  initialPose: 'hide'
})

const ListItem = posed.li({
  show: { opacity: 1, y: '0rem', transition },
  hide: { opacity: 0, y: '2rem', transition }
})

const AppList = ({ forecast, show, className }) => {
  return (
    <List
      pose={show ? 'show' : 'hide'}
      className={className}>
      {forecast.map(item =>
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

export default styled(AppList)`
  display: grid;
  list-style: none;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 50rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`
