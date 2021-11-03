import * as React from "react"
import styled from "styled-components"

type RowProps = {}

const StyledBox = styled.div`
  display: flex;
`

export const Row: React.FC = ({ children }) => {
  return <StyledBox>{children}</StyledBox>
}
