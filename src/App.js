import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 50rem;
`

class App extends Component {
  render () {
    return (
      <Wrapper>
        Acid Weather App
      </Wrapper>
    )
  }
}

export default App
