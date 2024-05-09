import { BreweryCarousel } from "./component/carousel/brewery/carousel";
import { Footer } from "./component/footer/footer";
import Header from "./component/header/Header";


export default function Home() {
  return (
    <>
      <Header></Header>
      <BreweryCarousel></BreweryCarousel>
      <Footer></Footer>
    </>
  );
}
