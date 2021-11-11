import { Colors } from "."

export type Borders = {
  radius: "12px"
  size: "1px"
  color: {
    white: Colors["whiteGlassBorder"]
  }
  style: "solid"
}

export type Border = keyof Borders
