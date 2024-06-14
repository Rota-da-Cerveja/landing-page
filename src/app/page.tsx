import { Header } from "@/app/component/header/header";
import { Carousel } from "@/app/component/carousel/carousel";
import { Feed } from "@/app/component/feed/feed";

import { EmblaOptionsType } from "embla-carousel";
import { Recommendation } from "@/app/component/recommendation/recommendation";
import axios, { Axios } from "axios";

const breweries: string[] = ["capibabier", "ekaut", "riffen", "marcolino", "manguezal", "doutorado-do-chopp"];
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

type Content = {
  breweries: string[];
};

export default async function Home() {

  const contentResponse = await axios.get<Content>(`${process.env.API_URI}/content`);

  const content: Content = contentResponse.data;

  return (<>
    <Header></Header>
    <Carousel slides={content.breweries} options={OPTIONS}></Carousel>
    <div className="flex">
      <Feed></Feed>
      <Recommendation></Recommendation>
    </div>
  </>
  );
}
