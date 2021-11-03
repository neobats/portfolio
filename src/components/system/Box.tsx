import * as React from 'react'
import styled from 'styled-components'

type BoxProps = {
  width: string
  height?: string
  color?: string
}

const StyledBox = styled.div<BoxProps>`
  width: ${props => props.width};
  height: ${({ height, width }) => height ? height : width};
  background-color: ${props => props.color};
`

export const Box: React.FC<BoxProps> = (props) => {

  return (
    <StyledBox {...props}>{props.children}</StyledBox>
  )
}
