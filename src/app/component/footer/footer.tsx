import Image from "next/image";
import logo from "../../../../public/logo.webp"
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
    <section className="container p-5 grid grid-cols-4 grid-rows-6 gap-x-2">
          <Image src={logo} alt="background" className="w-[80px] self-center col-start-1 justify-self-center"></Image>
        <div className="grid grid-cols-2 w-full row-start-2 justify-self-center col-span-4 col-start-1 uppercase font-black gap-y-1 gap-x-3">
              <h1 className={inter.className+" col-span-2 justify-self-center w-max"}>em breve</h1>
            <StoreButton title={"App Store"} icon={appStoreIcon}></StoreButton>
            <StoreButton title={"Google Play"} icon={playStoreIcon}></StoreButton>
        </div>
        <div className="uppercase pt-5 text-sm font-black flex col-start-1 row-span-3 col-span-2 items-self-center row-start-3 flex-col gap-2">
          <a>Sobre</a>    
          <a>Suporte</a>
          <a>Fornecedores</a>
        </div>

        <div className="col-span-2 pt-5 row-span-2 font-light flex flex-col gap-2 col-start-3 row-start-3">
          <h1 className="font-black">PARCERIAS</h1>
          <p>Quero ser parceiro</p>
        </div>
        <div className="flex justify-self-center self-center col-start-3 row-start-5 col-span-3 h-max w-max uppercase font-black">
            <h1 className={inter.className+" col-span-3 hidden justify-self-center w-max"}>Social</h1>
            <Social src={facebook}></Social>
            <Social src={instagram}></Social>
            <Social src={twitterx}></Social>
        </div>
        <div className="row-start-6 col-span-4 col-start-1 font-medium tracking-wider justify-start self-end text-xs text-white">
          <div className="flex gap-3 mb-3">
            <a>Política de Privacidade</a>
            <a className="flex-1">Termos de Uso</a>
          </div>
          <div className="flex gap-3">
            <a>Cookies</a>
            <a className="flex-1">Acessibilidade</a>
            <p className="tracking-wider font-medium text-xs text-white">© {currentYear} {packageJson.org}</p>
          </div>
          {/* <div className="flex gap-2">
            
          </div>
          <div className="col-start-1 row-start-2 flex gap-2 self-end">
            
            <a>Acessibilidade</a>
          </div>
          <p className="col-start-3 row-start-2 col-span-2 tracking-wider font-medium justify-self-center self-end text-xs text-white">© {currentYear} {packageJson.org}</p> */}
        </div>
    </section>
  </footer>);
}
