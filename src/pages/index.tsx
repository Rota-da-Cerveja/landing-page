import { About, Paragraph } from "@/components/about/About";
import { BreweryCarousel } from "@/components/carousel/carousel";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/Header";
import app from "../../public/device.webp";
import beer from "../../public/beer_description.webp";
import connection from "../../public/connection.webp";
import { Breweries } from "@/components/breweries/breweries";

import { Bebas_Neue } from "next/font/google"
import axios from "axios";
import { useEffect, useState } from "react";

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: '400' });

const paragraphs: Paragraph[] = [{
  text: "Explore um universo de sabores com a nossa plataforma! Imagine-se cercado por uma variedade estonteante de cervejas artesanais, cada garrafa contando sua própria história de sabor e qualidade. É isso que oferecemos - uma jornada sensorial única, onde você pode descobrir e apreciar uma seleção cuidadosamente curada das melhores cervejas. Desde as nuances de uma IPA robusta até a suavidade de uma pilsen refrescante.",
  image: beer
}, {
  text: "Descubra uma nova forma de conexão cervejeira! Nosso aplicativo une cervejarias artesanais e degustadores em todo o Brasil. Imagine-se diante de uma imagem inspiradora de conexões sendo formadas, representando a união entre produtores locais e apreciadores sedentos por novos sabores. É exatamente isso que proporcionamos - uma plataforma que promove interações autênticas e significativas entre as partes. Junte-se a nós nessa jornada de conexões e descobertas cervejeiras!",
  image: connection
}, {
  text: "Com uma interface amigável e recursos abrangentes, nosso aplicativo não apenas educa, mas também inspira uma jornada de degustação mais consciente e refinada. Junte-se a nós e transforme sua maneira de apreciar cerveja, descobrindo novos sabores, aprendendo sobre diferentes estilos e explorando o vasto mundo das cervejas artesanais. Com uma variedade de ferramentas interativas, guias especializados e comunidade engajada, nossa plataforma é o companheiro ideal para entusiastas e novatos no universo da cerveja. Faça parte dessa experiência única e eleve sua apreciação pela cultura cervejeira.",
  image: app
}];

export default function Home() {

  const [breweries, setBreweries] = useState<string[]>([]);

  useEffect(() => {
    axios.get<{ breweries: string[] }>("/api/breweries", { responseType: 'json' })
      .then(result => setBreweries(result.data.breweries));
  }, []);

  return (
    <>
      <Header></Header>
      <BreweryCarousel title="Cervejarias parceiras">
        <Breweries names={breweries}></Breweries>
      </BreweryCarousel>
      <About paragraphs={paragraphs}></About>
      <Footer></Footer>
    </>
  );
}
