import * as React from "react"
import styled from "styled-components"
import { Base } from "../components/layout"
import { Center, Typography } from "../components/system"

const StyledDiv = styled.div`
  background: ${props => props.theme.colors.main};
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
export default function Home() {
  return (
    <Base>
      <Center backgroundColor="neutralDark" gap="1rem">
        <StyledDiv></StyledDiv>
        <Typography
          tag="h1"
          color="neutralLight"
          // overrides={css`
          //   color: ${props => props.theme.colors.neutralLight};
          // `}
        >
          Hello World!
        </Typography>
      </Center>
    </Base>
  )
}
