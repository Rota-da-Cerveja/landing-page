import { About, Paragraph } from "@/components/about/About";
import { BreweryCarousel } from "@/components/carousel/carousel";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header/Header";
import app from "../../public/device.webp";
import beer from "../../public/beer_description.webp";
import connection from "../../public/connection.webp";
import { Breweries } from "@/components/breweries/breweries";

import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import axios from "axios";
import { BeerContainer } from "@/components/beer/beerContainer";

const paragraphs: Paragraph[] = [{
  text: "Descubra cervejas artesanais únicas e embarque numa viagem de sabores. De IPAs marcantes a pilsens leves, nossa seleção promete uma experiência sensorial inesquecível.",
  image: beer
}, {
  text: "Conecte-se a cervejarias locais e explore sabores únicos! Nosso app é a ponte para amantes da cerveja artesanal no Brasil. Viva essa experiência!",
  image: connection
}, {
  text: "Descubra cervejas artesanais com nosso app. Explore sabores, estilos e aprenda com guias e uma comunidade apaixonada. Torne-se um degustador refinado.",
  image: app
}];

type BreweriesResponse = {
  breweries: string[];
};

export const getStaticProps = (async (context) => {

  var breweries: BreweriesResponse = {
    breweries: ["ekaut"]
  };
  try {
    const result = await axios.get<BreweriesResponse>(`${process.env.API_URI}`, { responseType: 'json' });
    breweries = result.data;
  } catch (_) {}

  return {
    props: { breweries },
    revalidate: 60 * 60 * 24,
  };
}) satisfies GetStaticProps<{
  breweries: BreweriesResponse
}>

export default function Home({ breweries }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header></Header>
      <BreweryCarousel title="Cervejarias parceiras">
        <Breweries names={breweries.breweries || []}></Breweries>
      </BreweryCarousel>
      <About paragraphs={paragraphs}></About>
      <BeerContainer></BeerContainer>
      <Footer></Footer>
    </>
  );
}
