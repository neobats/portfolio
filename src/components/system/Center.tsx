import * as React from "react"
import styled from "styled-components"
import { Color } from "../../types/Colors"

type CenterProps = {
  backgroundColor?: Color
  direction?: "row" | "column"
}

const StyledBox = styled.div<CenterProps>`
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
`

export const Center: React.FC<CenterProps> = ({
  backgroundColor,
  direction = "row",
  children,
}) => {
  return (
    <StyledBox backgroundColor={backgroundColor} direction={direction}>
      {children}
    </StyledBox>
  )
}
