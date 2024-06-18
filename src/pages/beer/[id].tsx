import { Footer } from "@/app/component/footer/footer";
import { NavegationBar } from "@/app/component/navegation/bar";
import "@/app/globals.css";
import "./style.css";
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { sanitize } from '@/app/component/util/sanitize';
import { Social } from '@/app/component/social/social';
import defualt from '../../../public/defualt.png';
import glass from '../../../public/glass.png';
import React from 'react';
import { Icon, Scale } from "@/app/component/scale/scale";


type Beer = {
  name: string;
  ibu: number;
  description: string;
  type: string;
  volume: number;
  brewery: string;
  minimum_temperature: number;
  maximum_temperature: number
  alcohol_content: number;
  color: string;
  glass: String;
  body: number;
  aroma: number;
  malt: number;
  harmonization?: string[];
}



interface PageProps {
  beer: Beer;
}

export default function Page({ beer }: PageProps) {

  return <>
    <NavegationBar></NavegationBar>
    <main className='brewery-container'>
      <div className='brewery-background-container'>
        <img src={`/api/image?name=${sanitize(beer.brewery)}&type=breweries&color=monochrome`} className='brewery-background' />
      </div>
      <h1 className='title bg-white py-0'>
        <div className='title-container'>
          <img src={`/api/image?name=${sanitize(beer.brewery)}&type=breweries&color=colorful`} width={200} />
          <div className='title-container-and-social'>
            <span>{beer.name} ({beer.volume}ml)</span>
            <div className='brewery-social-container'>
              <Social path={"M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"}></Social>
              <Social path={"M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"}></Social>
              <Social path={"M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"}></Social>
              <Social path={"M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"}></Social>
            </div>
          </div>
        </div>
      </h1>
      <section className="beer-content-container">
        <div className="beer-img-container">
          <img src={defualt.src} />
        </div>
        <div className="beer-content">
          <p>{beer.description}</p>
          <div className="info">
            <div className="table-info-container">
              <span className="table-title">Corpo</span>
              <Scale scale={beer.body || 50} icon={Icon.BEER}></Scale>
              <span className="table-title">Aroma</span>
              <Scale scale={beer.aroma || 50} icon={Icon.AROMA} color="#77dd77"></Scale>
              <span className="table-title">Malte</span>
              <Scale scale={beer.malt || 50} icon={Icon.MALT} color="#84b6f4"></Scale>
              <span className="table-title">Cor</span>
              <span className="table-info">{beer.color || "Cobre"}</span>
              <span className="table-title">IBU</span>
              <span className="table-info">{beer.ibu}</span>
              <span className="table-title">ABV</span>
              <span className="table-info">{beer.alcohol_content.toFixed(1)}%</span>
              <span className="table-title col-span-2 normal-case">Consumir entre {beer.minimum_temperature}° e {beer.maximum_temperature}° C.</span>
            </div>
            <div className="ml-10">
              <h1 className="title flex-1 p-2 gap-2 items-center uppercase mb-10 text-lg justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor"><path d="M6.13317 2L5.01052 9.85858C4.70849 11.9728 5.53231 13.7891 6.89117 15.0465C7.99601 16.0688 9.45948 16.7319 11.0005 16.9343V20H6.00047V22H18.0005V20H13.0005V16.9343C14.5415 16.7319 16.0049 16.0688 17.1098 15.0465C18.4686 13.7891 19.2924 11.9728 18.9904 9.85858L17.8678 2H6.13317ZM10.0003 7C9.16936 7.00013 8.16238 7.24244 7.37122 7.47579L7.86776 4H16.1332L16.6234 7.4314C15.7848 7.70691 14.8897 8 14.0005 8C12.6083 8 11.4276 6.99978 10.0003 7Z"></path></svg>
                <span>Copo ideal</span>
              </h1>
              <div className="glass-container gap-10">
                <div className="glass-image-container">
                  <img src={glass.src} />
                </div>
                <div className="flex flex-col justify-center">
                  <p>O copo ideal para apreciar é um no estilo <b className="text-primary-100">{beer.glass}</b>.
                    foi produzido especialmente para se apreciar essa bebida.</p>
                  <p>
                    A sua bacia curva e larga ajuda a valorizar os lúpulos, intensificando
                    os aromas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="title flex-1 p-2 gap-2 items-center uppercase my-10 text-lg justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor"><path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path></svg>
            <span>HARMONIZAÇÃO</span>
          </h1>
          <ul>
            {beer.harmonization?.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </>
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  try {
    const response = await axios.get<Beer>(`http://localhost:8080/beer/${id}`);
    console.log(response.data)
    return { props: { beer: response.data } };
  } catch (error) {
    console.log(error);
    return { props: { beer: {} as Beer } };
  }
}