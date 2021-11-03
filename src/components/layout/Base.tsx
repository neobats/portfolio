import * as React from "react"
import { FontVariation } from "../../types/FontVariation"
import { GlobalStyle } from "../GlobalStyle"

const DEFAULT_FONT_SETTINGS: FontVariation = {
  wght: 400,
  slnt: 0,
  FLAR: 0,
  VOLM: 0,
}

export const Base: React.FC = ({ children }) => (
  <>
    <GlobalStyle fontVariationSettings={DEFAULT_FONT_SETTINGS} />
    {children}
  </>
)
