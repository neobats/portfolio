import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  colors: {
    main: "#FA874B",
    mainLight: "#E38D39",
    mainDark: "#E35B39",
    light: "#FDB53F",
    dark: "#FD4A3F",
    neutralDark: "rgba(50, 50, 50, 1)",
    neutralDarkGlass: "rgba(50, 50, 50, 0.8)",
    neutralLight: "rgba(205, 205, 205, 1)",
    neutralLightGlass: "rgba(205, 205, 205, 0.8)",
    white: "#FAFAFA",
    whiteGlassBorder: "rgba(249, 249, 249, 0.125)",
    black: "#060606",
    confirmation: "#83FA64",
    error: "#FA3D32",
  },
  gradients: {
    mainGradient:
      "linear-gradient(88.03deg, rgba(253, 74, 63, 0.7) 0%, rgba(227, 141, 57, 0.7) 100%)",
    softGradient:
      "linear-gradient(88.03deg, rgba(253, 181, 63, 0.7) 0%, rgba(227, 91, 57, 0.7) 100%)",
  },
  borders: {
    radius: "12px",
    color: {
      white: "rgba(249, 249, 249, 0.125)",
    },
    size: "1px",
    style: "solid",
  },
  backdropFilters: {
    main: "saturate(180%) blur(16px)",
  },
  opacities: {
    full: 1,
    glass: 0.8,
    half: 0.5,
    quarter: 0.25,
    none: 0,
  },
}
