import React from "react";
import "./About.css";
import { Bebas_Neue } from "next/font/google"

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: '400' });

export const About: React.FunctionComponent = () => {
    return (<section className="about-wrapper">
        <h1 className={`about-title ${bebas_Neue.className}`}>Sobre a Rota Da Cerveja</h1>
        <p className="about-description">
            Para revolucionar a experiência cervejeira, criamos um aplicativo inovador que orienta <b>entusiastas</b> a descobrir e apreciar cervejas de qualidade.
        </p>
        <p className="about-description">
            Nossa plataforma é o ponto de partida ideal para aqueles que desejam elevar seu paladar, oferecendo um guia confiável para encontrar as melhores cervejas artesanais.
        </p>
        <p className="about-description">
            Com uma interface amigável e recursos abrangentes, nosso aplicativo não apenas educa, mas também inspira uma jornada de degustação mais consciente e refinada. Junte-se a nós e transforme sua maneira de beber cerveja.
        </p>
    </section>);
}