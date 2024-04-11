import Image from "next/image";
import logo from "../../../../public/logo.png"
import { Inter } from "next/font/google";
import { StoreButton } from "../button/store/Store";
import playStoreIcon from "../../../../public/icon/google-play.svg";
import appStoreIcon from "../../../../public/icon/app-store.svg";

import facebook from "../../../../public/icon/facebook-fill.svg";
import instagram from "../../../../public/icon/instagram-line.svg";
import twitterx from "../../../../public/icon/twitter-x-fill.svg";
import { Social } from "../button/social/Social";
import path from "path";
import fs from 'fs';

const inter = Inter({subsets: ["latin"]});

export function Footer() {

    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    const currentYear = new Date().getFullYear();

  return (<footer className="bg-black text-white flex justify-center">
    <section className="container my-7 grid grid-cols-4 grid-rows-3 gap-4">
          <Image src={logo} alt="background" width={125} className="self-center justify-self-center"></Image>
        <div className="grid grid-cols-2 justify-self-center col-span-2 col-start-2 gap-y-2 gap-x-5 w-max uppercase font-black">
              <h1 className={inter.className+" col-span-2 justify-self-center w-max"}>em breve</h1>
            <StoreButton title={"App Store"} icon={appStoreIcon}></StoreButton>
            <StoreButton title={"Google Play"} icon={playStoreIcon}></StoreButton>
        </div>

        <div className="grid grid-cols-3 justify-self-center self-center col-start-4 row-span-2 h-max gap-y-2 gap-x-5 w-max uppercase font-black">
            <h1 className={inter.className+" col-span-3 justify-self-center w-max"}>Social</h1>
            <Social src={facebook}></Social>
            <Social src={instagram}></Social>
            <Social src={twitterx}></Social>
        </div>
        <div className="uppercase text-sm font-black flex col-start-2 row-start-2 flex-col justify-around">
          <a>Sobre</a>    
          <a>Suporte</a>
          <a>Fornecedores</a>
        </div>
        <div className="font-light flex flex-col gap-2 col-start-3 row-start-2">
          <h1 className="font-black">PARCERIAS</h1>
          <p>QUERO SER PARCEIRO</p>
        </div>
        <div className="flex justify-around col-span-2 row-start-3 font-medium tracking-wider self-end text-xs text-white">
            <a>Política de Privacidade</a>
            <a>Termos de Uso</a>
            <a>Cookies</a>
            <a>Acessibilidade</a>
        </div>
        <p className="col-start-4 tracking-wider font-medium justify-self-center self-end text-xs text-white">© {currentYear} {packageJson.org}</p>
    </section>
  </footer>);
}
