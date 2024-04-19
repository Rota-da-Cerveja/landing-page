import Image from "next/image";
import logo from "../../public/logo.webp";
import background from "../../public/08816ac6f52163f995c552cd673ee601.webp";
import { Footer } from "./component/footer/footer";

export default function Home() {
  return (
    <>
      <main
        className="main flex bg-black bg-cover bg-right-bottom justify-center h-screen w-full bg-no-repeat text-white"
        style={{ backgroundImage: "url('" + background.src + "')" }}>
          <div className="container m-4 md:mt-20 mt-14">
            <h2 className="text-xl mb-4 md:mb-16 md:text-3xl">
              As melhores cervejas artesanais da sua região?
            </h2>
            <Image src={logo} alt="Logo" className="w-60 mb-4 md:mb-16 md:w-[60%]"></Image>
            <h3 className="w-64 text-base md:text-2xl md:w-[65%] font-bold">
              O aplicativo desenvolvido para você ter a melhor experiência cervejeira possível.
            </h3>
            <button className="bg-primary-700 py-4 md:py-8 px-7 md:px-14 mt-10 text-base md:text-3xl rounded">Quero Conhecer a Rota</button>
          </div>
        {/* <div className="w-1/2 bg-red-500 flex justify-center items-center">
          <div className="flex flex-col gap-[20px]">
            <h2 className="max-w-[522px]">
              As melhores cervejas artesanais da sua região?
            </h2>
            <h3 className="max-w-[522px]">
              O aplicativo desenvolvido para você ter a melhor experiência cervejeira possível.
            </h3>
            
          </div>
        </div> */}
      </main>

      <Footer></Footer>
    </>
  );
}
