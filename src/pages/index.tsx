import * as React from "react"
import styled, { keyframes } from "styled-components"
import { Base } from "../components/layout"
import { Typography } from "../components/system"

// Nav ideas: https://www.behance.net/gallery/79473185/25-Animated-Tab-Bar-Designs-for-Inspiration?tracking_source=search_projects_recommended%7Cnavigation

const StyledGrid = styled.header`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.gradients.softGradient};
`

const StyledCard = styled.article`
  display: grid;
  padding: 2em 1.2em;
  margin: 2em 0;
  background-color: ${props => props.theme.colors.neutralDarkGlass};
  backdrop-filter: ${props => props.theme.backdropFilters.main};
  border: ${props =>
    `${props.theme.borders.size} ${props.theme.borders.style} ${props.theme.borders.color}`};
  border-radius: ${props => props.theme.borders.radius};
`

const noFlairKeyframes = keyframes`
  0% {
    font-variation-settings: 'FLAR' 100, 'VOLM' 100, 'wght' 700;
    transform: scale(1);
  }

  100% {
    font-variation-settings: 'FLAR' 0, 'VOLM' 0, 'wght' 100;
    transform: scale(0);
  }
`
const flairKeyframes = keyframes`
  0% {
    font-variation-settings: 'FLAR' 0, 'VOLM' 0, 'wght' 200;
  }

  100% {
    font-variation-settings: 'FLAR' 100, 'VOLM' 100, 'wght' 700;
  }
`

const StyledStrikethrough = styled.span`
  align-self: center;
  text-decoration: line-through;
  font-variation-settings: "FLAR" 100, "VOLM" 100, "wght" 700;
  animation: ${noFlairKeyframes} 0.8s linear 1 1.5s;
  animation-fill-mode: forwards;
`

const StyledExpand = styled.span`
  font-variation-settings: "FLAR" 0, "VOLM" 0, "wght" 200;
  animation: ${flairKeyframes} 0.8s linear 1 1.5s;
  animation-fill-mode: forwards;
`

export default function Home() {
  return (
    <Base>
      <StyledGrid>
        <StyledCard>
          <Typography tag="h1" color="neutralLight">
            <StyledStrikethrough>Java</StyledStrikethrough>
            <StyledExpand>Type</StyledExpand>
            Script Developer
            <br />
            <StyledExpand>Interaction Designer</StyledExpand>
          </Typography>
        </StyledCard>
      </StyledGrid>
    </Base>
  )
}
