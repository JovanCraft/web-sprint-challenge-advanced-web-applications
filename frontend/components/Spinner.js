import React from 'react'
import styled, { keyframes } from 'styled-components'
import PT from 'prop-types'

const rotation = keyframes

const opacity = keyframes

const StyledSpinner = styled.div`
  animation: ${opacity} 1s infinite linear;

  h3 {
    transform-origin: center center;
    animation: ${rotation} 1s infinite linear;
  }
`

export default function Spinner({ on }) {
  if (!on) return null
  return (
    <StyledSpinner id="spinner" data-testid="spinner">
      <h3>&nbsp;.</h3>&nbsp;&nbsp;&nbsp;Please wait...
    </StyledSpinner>
  )
}

Spinner.propTypes = {
  on: PT.bool.isRequired,
}
