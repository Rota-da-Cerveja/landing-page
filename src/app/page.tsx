import Image from "next/image";
import { Footer } from "./component/footer/footer";
import { image } from "./component/assets/image";

export default function Home() {
  return (
    <>
      <main
        className="main flex bg-black bg-cover bg-left-top justify-center h-screen w-screen bg-no-repeat text-white"
        style={{ backgroundImage: "url('" + image.background.src + "')" }}>
           <div className="container m-4 md:mt-20 mt-14 h-3/5 flex flex-col justify-between">
            <h2 className="text-xl md:text-3xl z-10 relative">
              As melhores cervejas artesanais da sua região?
            </h2>
            <Image src={image.logo} alt="Logo" className="w-60 md:w-[60%] z-10 relative"></Image>
            <h3 className="w-64 text-base md:text-2xl md:w-[65%] font-bold z-10 relative">
              O aplicativo desenvolvido para você ter a melhor experiência cervejeira possível.
            </h3>
            <button className="bg-primary-700 py-4 md:py-8 px-7 w-[75%] md:px-14 text-base md:text-3xl rounded z-10 relative">Quero Conhecer a Rota</button>
            
          </div> 
          <div className="absolute bg-cover h-[calc(100vh-3.5rem)] md:h-[calc(100vh-5rem)] left-2/3 w-[calc(100vw-66.666667%)] -bottom-2 z-0"
            style={{ backgroundImage: "url('" + image.glass.src + "')" }}
          ></div>
          {/* <Image src={image.glass} alt={""} className="absolute h-[calc(100vh-3.5rem)] md:h-[calc(100vh-5rem)] left-2/3 -bottom-2 z-0"></Image> */}
      </main>

      <Footer></Footer>
    </>
  );
}
