import React from "react";
import "./About.css";
import app from "../../../../public/device.webp";
import beer from "../../../../public/beer_description.webp";

import connection from "../../../../public/connection.webp"
import { Bebas_Neue } from "next/font/google"
import Image from "next/image";

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: '400' });

export const About: React.FunctionComponent = () => {
    return (<section className="about-wrapper">
        <h1 className={`about-title ${bebas_Neue.className}`}>Sobre a Rota Da Cerveja</h1>
        <div className="about-container">
            <div className="about-paragraph-container">
                <p className="about-description">
                    Explore um universo de sabores com a nossa plataforma! Imagine-se cercado por uma variedade estonteante de cervejas artesanais, cada garrafa contando sua própria história de sabor e qualidade. É isso que oferecemos - uma jornada sensorial única, onde você pode descobrir e apreciar uma seleção cuidadosamente curada das melhores cervejas. Desde as nuances de uma IPA robusta até a suavidade de uma pilsen refrescante.
                </p>
                <Image src={beer.src} alt="" width={beer.width*0.75} height={beer.height*0.75}></Image>
            </div>
            <div className="about-paragraph-container">
                <p className="about-description">
                Descubra uma nova forma de conexão cervejeira! Nosso aplicativo une cervejarias artesanais e degustadores em todo o Brasil. Imagine-se diante de uma imagem inspiradora de conexões sendo formadas, representando a união entre produtores locais e apreciadores sedentos por novos sabores. É exatamente isso que proporcionamos - uma plataforma que promove interações autênticas e significativas entre as partes. Junte-se a nós nessa jornada de conexões e descobertas cervejeiras!
                {/* Descubra uma nova forma de conexão no mundo cervejeiro com nosso aplicativo inovador! Nosso objetivo é unir cervejarias artesanais e degustadores apaixonados por cerveja em todo o Brasil, criando uma rede dinâmica e inclusiva. Imagine-se diante de uma imagem inspiradora de conexões sendo formadas, representando a união entre produtores locais e apreciadores sedentos por novos sabores. É exatamente isso que proporcionamos - uma plataforma que promove interações autênticas e significativas entre as partes, impulsionando a indústria cervejeira artesanal e elevando a experiência de consumo para novos patamares. Junte-se a nós nessa jornada de conexões e descobertas cervejeiras - estamos prontos para compartilhar essa emocionante jornada com você! */}
                </p>
                <Image src={connection.src} alt="" width={connection.width * 0.75} height={connection.height * 0.75}></Image>
            </div>
            <div className="about-paragraph-container">
                <p className="about-description">
                    Com uma interface amigável e recursos abrangentes, nosso aplicativo não apenas educa, mas também inspira uma jornada de degustação mais consciente e refinada. Junte-se a nós e transforme sua maneira de apreciar cerveja, descobrindo novos sabores, aprendendo sobre diferentes estilos e explorando o vasto mundo das cervejas artesanais. Com uma variedade de ferramentas interativas, guias especializados e comunidade engajada, nossa plataforma é o companheiro ideal para entusiastas e novatos no universo da cerveja. Faça parte dessa experiência única e eleve sua apreciação pela cultura cervejeira.
                </p>
                <Image src={app.src} alt="" width={app.width * 0.3} height={app.height * 0.3}></Image>
            </div>
        </div>
    </section >);
}