import Image from "next/image";
import logo from "../../../../public/logo.webp"
import { Inter } from "next/font/google";
import { StoreButton } from "../button/store/Store";
import { Social } from "../button/social/Social";
import path from "path";
import fs from 'fs';
import { icons } from "../assets/icon";
import './footer.css';

const inter = Inter({subsets: ["latin"]});

export function Footer() {

    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    const currentYear = new Date().getFullYear();

  return (<footer className="footer-wrapper">
    <section className="footer-container">
          <Image src={logo} alt="background" className="footer-logo"></Image>
        <div className="footer-content">
              <h1 className={`footer-heading ${inter.className}`}>em breve</h1>
            <StoreButton title="App Store" icon={icons.appStore}></StoreButton>
            <StoreButton title="Google Play" icon={icons.playStore}></StoreButton>
        </div>
        <div className="footer-links">
          <a>Sobre</a>    
          <a>Suporte</a>
          <a>Fornecedores</a>
        </div>

        <div className="footer-partnerships">
          <h1 className="font-black">PARCERIAS</h1>
          <p>Quero ser parceiro</p>
        </div>
        <div className="footer-social">
            <h1 className={`footer-heading ${inter.className}`}>Social</h1>
            <Social src={icons.facebook}></Social>
            <Social src={icons.instagram}></Social>
            <Social src={icons.twitterx}></Social>
        </div>
        <div className="row-start-6 col-span-4 col-start-1 font-medium tracking-wider justify-start self-end text-xs text-white landscape:lg:col-span-4 landscape:lg:row-start-4">
          <div className="flex flex-wrap gap-3 mb-3">
            <a>Política de Privacidade</a>
            <a className="flex-1 md:flex-none min-w-max">Termos de Uso</a>
            <a>Cookies</a>
            <a className="flex-1">Acessibilidade</a>
            <p className="tracking-wider font-medium text-xs text-white">© {currentYear} {packageJson.org}</p>
          </div>
        </div>
    </section>
  </footer>);
}
