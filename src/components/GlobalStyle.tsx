import { createGlobalStyle } from "styled-components"
import Commissioner from "../fonts/Commissioner.ttf"
import { FontVariation } from "../types/FontVariation"
import { explodeFontSettings } from "../utils/explodeFontSettings"

export const GlobalStyle = createGlobalStyle<{
  fontVariationSettings: FontVariation
}>`
  @font-face {
    font-family: 'Commissioner';
    src: url(${Commissioner}) format('truetype');
    font-variation-settings: 'wght' 400, 'FLAR' 0, 'VOLM' 0, 'slnt' 0;
  }

  body {
    font-family: 'Commissioner', Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-variation-settings: ${props =>
      explodeFontSettings(props.fontVariationSettings)};

    margin: 0;
    padding: 0;
  }
`
