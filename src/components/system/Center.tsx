import * as React from "react"
import styled from "styled-components"
import { Color } from "../../types/Colors"

type CenterProps = {
  backgroundColor?: Color
  direction?: "row" | "column"
  gap?: string
}

const StyledBox = styled.div<CenterProps>`
  background-color: ${props => props.theme.colors[props.backgroundColor]};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
  ${props => (props.gap ? `gap: ${props.gap}` : "")};
`

export const Center: React.FC<CenterProps> = ({
  backgroundColor,
  direction = "row",
  gap,
  children,
}) => {
  return (
    <StyledBox
      backgroundColor={backgroundColor}
      direction={direction}
      gap={gap}
    >
      {children}
    </StyledBox>
  )
}
