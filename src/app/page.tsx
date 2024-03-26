import Image from "next/image";
import background from "../../public/CervejaEspumanteNoBalcaoDoBar.png";
import logo from "../../public/logo.png";

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen items-center bg-contain justify-between p-24 h-screen w-full bg-no-repeat shadow-inner"
        style={{ backgroundImage: "url('" + background.src + "')" }}>
        <div className="w-1/2 bg-red-500 flex justify-center items-center">
          <div className="flex flex-col gap-[20px]">
            <h2 className="max-w-[522px]">
              As melhores cervejas artesanais da sua região?
            </h2>
            <Image src={logo} alt="Logo" className="max-w-544"></Image>
            <h3 className="max-w-[522px]">
              O aplicativo desenvolvido para você ter a melhor experiência cervejeira possível.
            </h3>
            <button className="mt-[10px]">Quero Conhecer a Rota</button>
          </div>
        </div>
      </main>
    </>
  );
}
