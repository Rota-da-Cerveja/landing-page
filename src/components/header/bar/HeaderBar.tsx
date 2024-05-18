import { image } from "@/components/assets/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import "./HeaderBar.css";

 export const HeaderBar: React.FunctionComponent = () => {
  var tituloFormatado: string = "";
  const router = useRouter()
  console.log(router);

  return <header className="header-bar-wrapper">
      <div className="header-bar-container">
        <Image src={image.logo} alt="background" className="header-bar-logo"></Image>
      </div>
  </header>
}