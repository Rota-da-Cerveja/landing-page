import Image from "next/image";
import background from "../../public/CervejaEspumanteNoBalcaoDoBar.png";
import logo from "../../public/logo.png";
import facebook from "../../public/facebook.png";

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
      <footer className="bg-[#000000] text-[#ffffff]">
      <Image src={background} alt="background"></Image>
        <section id="footer_download" className="mt-4 p-4 bg-dark text-white text-center">
            <h1  className=""> em breve</h1>
            <button>app store</button>  
            <button>play store</button>  
        </section>
        <section id="footer_social" className="mt-4 p-4 bg-dark text-white text-right">
            <h1 className="">social </h1>
            <a href="https://www.facebook.com/" target="_blank"> 
            <Image src={facebook} alt="facebook"></Image>
            </a>
            <a className="text-[#ffa500]" href="#">instagram | </a>
            <a className="text-[#ffa500]"  href="#">x</a>
        </section>
        <section id="footer_sobre" className="flex min-w-screen">
            <div>
                <h5 className="" >sobre</h5>
                <h5 className="" >fornecedores</h5>
            </div>
            <div className="mt-4 p-4 bg-dark text-white text-center">
                <h5 className="">suporte</h5>
                <p className="">perguntas frequentes</p>
                <p className="">contate-nos</p>
            </div>
            <div className="mt-0 p-4 bg-dark text-white text-right">
                <h5 className="">parcerias</h5>
                <p className="">quero ser parceiro</p>
            </div>
        </section>
        <section id="footer_info">
            <div>
                <a className="" href="#">política de privacidade | </a>
                <a className="" href="#">termos de uso | </a>
                <a className="" href="#">cookies | </a>
                <a className="" href="#">acessibilidade</a>
            </div>
            <div className="m-5 p-4 bg-dark text-white text-right">
                <a className="" href="#">beba com moderação</a>
            </div>
        </section>
      </footer>
    </>
  );
}
