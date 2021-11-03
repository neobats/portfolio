// import original module declarations
import "styled-components"
import { Colors } from "./types/Colors"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors
  }
}
