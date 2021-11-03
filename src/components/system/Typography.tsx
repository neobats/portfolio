import * as React from "react"
import styled from "styled-components"
import { FontVariation } from "../../types/FontVariation"
import { explodeFontSettings } from "../../utils/explodeFontSettings"

type TextProps = {
  fontVariation: FontVariation
}

type TypographyProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "em"
  fontVariation?: FontVariation
  styleOverrides?: React.CSSProperties
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
`
const StyledHTwo = styled.h2<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...heading, ...props.fontVariation })};
`
const StyledHThree = styled.h3<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...heading, ...props.fontVariation })};
`
const StyledHFour = styled.h4<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...heading, ...props.fontVariation })};
`
const StyledP = styled.p<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...body, ...props.fontVariation })};
`
const StyledSpan = styled.span<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...body, ...props.fontVariation })};
`
const StyledEm = styled.em<TextProps>`
  font-variation-settings: ${props =>
    explodeFontSettings({ ...fullSlant, ...props.fontVariation })};
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
    <Component fontVariation={props.fontVariation}>{props.children}</Component>
  )
}
