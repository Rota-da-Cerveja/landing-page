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
              <h1 className={[inter.className, " col-span-2 justify-self-center w-max"]}>em breve</h1>
            <StoreButton title={"App Store"} icon={appStoreIcon}></StoreButton>
            <StoreButton title={"Google Play"} icon={playStoreIcon}></StoreButton>
        </div>

        <div className="grid grid-cols-3 justify-self-center self-center col-start-4 row-span-2 h-max gap-y-2 gap-x-5 w-max uppercase font-black">
            <h1 className={[inter.className," col-span-3 justify-self-center w-max"]}>Social</h1>
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
    {/* <section id="footer_download" className="mt-4 p-4 bg-dark text-white text-center">
        <button>app store</button>  
        <button>play store</button>  
    </section> */}
    {/* <section id="footer_social" className="mt-4 p-4 bg-dark text-white text-right">
        <h1 className="">social </h1>
        <a href="https://www.facebook.com/" target="_blank"> 
        <Image src={facebook} alt="facebook"></Image>
        </a>
        <a className="text-[#ffa500]" href="#">instagram | </a>
        <a className="text-[#ffa500]"  href="#">x</a>
    </section>
    <section id="footer_sobre" className="flex min-w-screen">
        <div>
            <h5 className="" >sobre</h5>
            <h5 className="" >fornecedores</h5>
        </div>
        <div className="mt-4 p-4 bg-dark text-white text-center">
            <h5 className="">suporte</h5>
            <p className="">perguntas frequentes</p>
            <p className="">contate-nos</p>
        </div>
        <div className="mt-0 p-4 bg-dark text-white text-right">
            <h5 className="">parcerias</h5>
            <p className="">quero ser parceiro</p>
        </div>
    </section>
    <section id="footer_info">
        <div>
            <a className="" href="#">política de privacidade | </a>
            <a className="" href="#">termos de uso | </a>
            <a className="" href="#">cookies | </a>
            <a className="" href="#">acessibilidade</a>
        </div>
        <div className="m-5 p-4 bg-dark text-white text-right">
            <a className="" href="#">beba com moderação</a>
        </div>
    </section> */}
  </footer>);
}
