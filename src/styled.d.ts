// import original module declarations
import "styled-components"
import { BackdropFilters, Borders, Colors, Gradients, Opacities } from "./types"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors
    gradients: Gradients
    borders: Borders
    opacities: Opacities
    backdropFilters: BackdropFilters
  }
}
