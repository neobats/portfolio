import * as React from "react"
import { Base } from "../components/layout"
import { Center, Typography } from "../components/system"

export default function Home() {
  return (
    <Base>
      <Center>
        <Typography tag="h1">Hello World!</Typography>
      </Center>
    </Base>
  )
}
