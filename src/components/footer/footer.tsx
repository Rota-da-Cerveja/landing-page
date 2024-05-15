import Image from "next/image";
import { Inter } from "next/font/google";
import { StoreButton } from "../button/store/Store";
import { Social } from "../button/social/Social";
import path from "path";
import fs from 'fs';
import './footer.css';
import { icon, image } from "../assets/assets";

const inter = Inter({subsets: ["latin"]});

export function Footer() {

  // const packageJsonPath = path.join(process.cwd(), 'package.json');
  // const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  const currentYear = new Date().getFullYear();

  return (<footer className="footer-wrapper">
    <section className="footer-container">
      <Image src={image.logo} alt="background" className="footer-logo"></Image>
      <div className="footer-content">
        <h1 className={`footer-heading-center ${inter.className}`}>em breve</h1>
        <StoreButton title="App Store" icon={icon.appStore}></StoreButton>
        <StoreButton title="Google Play" icon={icon.playStore}></StoreButton>
      </div>
      <div className="footer-links">
        <a href="#">Sobre</a>    
        <a href="#">Suporte</a>
        <a href="#">Fornecedores</a>
      </div>

      <div className="footer-partnerships">
        <h1 className="footer-heading">PARCERIAS</h1>
        <p>Quero ser parceiro</p>
      </div>
      <div className="footer-social">
        <h1 className={`footer-heading-center ${inter.className}`}>Social</h1>
        <Social src={icon.facebook}></Social>
        <Social src={icon.instagram}></Social>
        <Social src={icon.twitterx}></Social>
      </div>
      <div className="footer-info">
        <div className="footer-info-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Cookies</a>
          <a href="#">Acessibilidade</a>
          {/* <p>© {currentYear} {packageJson.org}</p> */}
        </div>
      </div>
    </section>
  </footer>);
}
