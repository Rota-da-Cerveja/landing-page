import Image from "next/image";
import { Footer } from "./component/footer/footer";
import { image } from "./component/assets/image";

export default function Home() {
  return (
    <>
      <main
        className="flex bg-black bg-cover bg-left-top justify-center h-screen w-full landscape:lg:w-full bg-no-repeat text-white" style={{ backgroundImage: "url('" + image.background.src + "')" }}>
           <div className="container landscape:lg:w-[calc(100vw-2.5rem)] p-4 lg:px-10 md:pt-20 lg:pt-8 pt-14 h-5/6 landscape:lg:h-full flex flex-col justify-between landscape:lg:justify-around">
            <h2 className="text-xl md:text-3xl z-10 relative">
              As melhores cervejas artesanais da sua região?
            </h2>
            <Image src={image.logo} alt="Logo" className="w-60 md:w-[60%] landscape:lg:w-[40%] z-10 relative"></Image>
            <h3 className="w-64 text-base md:text-2xl md:w-[65%] font-bold z-10 relative">
              O aplicativo desenvolvido para você ter a melhor experiência cervejeira possível.
            </h3>
            <div className="flex justify-start md:justify-center w-64 md:w-[65%] lg:justify-center">
              <button className="bg-primary-700 py-4 md:py-8 px-7 w-full lg:w-[75%] lg:py-4 landscape:lg:w-max md:px-14 text-base lg:text-base md:text-3xl rounded z-10 relative">Quero Conhecer a Rota</button>
            </div>
          </div> 
          <div className="absolute bg-cover lg:bg-contain bg-no-repeat h-[calc(100vh-3.5rem)] md:h-[calc(100vh-5rem)] right-0 aspect-half-glass landscape:lg:aspect-glass landscape:lg:right-[10%] -bottom-2 z-0"
            style={{ backgroundImage: "url('" + image.glass.src + "')" }}
          ></div>
      </main>

      <Footer></Footer>
    </>
  );
}
