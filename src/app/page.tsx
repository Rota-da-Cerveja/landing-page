import { Header } from "@/app/component/header/header";
import { Carousel } from "@/app/component/carousel/carousel";
import { Feed } from "@/app/component/feed/feed";

import { EmblaOptionsType } from "embla-carousel";
import { Recommendation } from "./component/recommendation/recommendation";

const breweries: string[] = ["capibabier", "ekaut", "riffen", "marcolino", "manguezal", "doutorado-do-chopp"];
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

export default function Home() {
  return (<>
    <Header></Header>
    <Carousel slides={breweries} options={OPTIONS}></Carousel>
    <div className="flex">
      <Feed></Feed>
      <Recommendation></Recommendation>
    </div>
  </>
  );
}
