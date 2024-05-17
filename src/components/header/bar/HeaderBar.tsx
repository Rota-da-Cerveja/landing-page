import { useRouter } from "next/router"
import React from "react"

 export const HeaderBar: React.FunctionComponent = () => {
  var tituloFormatado: string = "";
  const router = useRouter()
  console.log(router);

  return <header>
      {/* <img src="logo.png"> */}
      <h1>{tituloFormatado}</h1>
  </header>
}