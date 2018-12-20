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

const AppList = ({ forecast, show, ...props }) => {
  return (
    <List
      pose={show ? 'show' : 'hide'}
      {...props}>
      {forecast.map(item =>
        <ListItem key={item.city}>
          <AppCard
            rounded={!props.fullscreen ? 1 : 0}
            bg={item.bg}
            title={item.city}
            forecast={item.forecast}
            time={item.currTime} />
        </ListItem>
      )}
    </List>
  )
}

export default styled(AppList)`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  ${props => props.fullscreen && `
    grid-gap: 0;
    position: absolute;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
  `}

  @media screen and (max-width: 50rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`
