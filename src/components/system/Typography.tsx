import * as React from "react"
import styled from "styled-components"
import { Color, StyledCSS } from "../../types"
import { FontVariation } from "../../types/FontVariation"
import { explodeFontSettings } from "../../utils/explodeFontSettings"

type TextProps = {
  fontVariation: FontVariation
  color?: Color
  overrides?: StyledCSS
}

type TypographyProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "em"
  fontVariation?: FontVariation
  color?: Color
  overrides?: StyledCSS
}
const fullFlair = {
  FLAR: 100,
  VOLM: 100,
}
const noSlant = {
  slnt: 0,
}
const fullSlant = {
  slnt: -12,
}
const heading = {
  ...fullFlair,
  ...noSlant,
  wght: 700,
}
const body = {
  FLAR: 0,
  VOLM: 0,
  slnt: 0,
  wght: 400,
}
const semiBold = {
  ...body,
  wght: 500,
}

const StyledHOne = styled.h1<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...heading, ...props.fontVariation })};
  color: ${({ theme, color }) =>
    theme.colors[color] ?? theme.colors.neutralLight};
  font-size: 6rem;
  ${props => props.overrides};
`
const StyledHTwo = styled.h2<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...heading, ...props.fontVariation })};
  font-size: 4.5rem;
  ${props => props.overrides};
`
const StyledHThree = styled.h3<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...heading, ...props.fontVariation })};
  font-size: 3rem;
  ${props => props.overrides};
`
const StyledHFour = styled.h4<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...heading, ...props.fontVariation })};
  font-size: 2rem;
  ${props => props.overrides};
`
const StyledP = styled.p<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...body, ...props.fontVariation })};
  ${props => props.overrides};
`
const StyledSpan = styled.span<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...body, ...props.fontVariation })};
  ${props => props.overrides};
`
const StyledEm = styled.em<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...fullSlant, ...props.fontVariation })};
  ${props => props.overrides};
`

const typographyMap = {
  h1: StyledHOne,
  h2: StyledHTwo,
  h3: StyledHThree,
  h4: StyledHFour,
  p: StyledP,
  span: StyledSpan,
  em: StyledEm,
}

export const Typography: React.FC<TypographyProps> = props => {
  const Component = typographyMap[props.tag]
  return (
    <Component
      fontVariation={props.fontVariation}
      color={props.color ?? "neutralLight"}
      overrides={props.overrides}
    >
      {props.children}
    </Component>
  )
}
