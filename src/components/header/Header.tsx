import Image from "next/image";
import './Header.css';
import { image } from "../assets/assets";

export default function Header () {
  return (
    <header className='header-wrapper'  style={{ backgroundImage: "url('" + image.background.src + "')" }}>
      <div className="header-container">
        <h2 className="header-heading">
          As melhores cervejas artesanais da sua região!
        </h2> 
        <Image src={image.logo} alt="Logo" className="header-logo"></Image>
        <h3 className="header-heading">
          O aplicativo desenvolvido para você ter a melhor experiência cervejeira.
        </h3>
        <div className="header-container-button">
          <button className="header-button">Quero Conhecer a Rota</button>
        </div>
      </div>
      <span className="header-container-glass"
        style={{ backgroundImage: "url('" + image.glass.src + "')" }}
      ></span>
    </header>
  );
}
