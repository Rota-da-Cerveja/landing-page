import React from "react";
import "./carousel.css";

import img1 from "../../../../../public/developer/duvalia_gray_5:3.png";
import img2 from "../../../../../public/developer/friedHaus_gray_5:3.png";
import img3 from "../../../../../public/developer/na-tota-hmb_gray_5:3.png";
import img4 from "../../../../../public/developer/navegantes_gray_5:3.png";
import img5 from "../../../../../public/developer/hoffen_gray_5:3.png";
import img6 from "../../../../../public/developer/riffen_gray_5:3.png";
import img7 from "../../../../../public/developer/manguezal_gray_5:3.png";
import img8 from "../../../../../public/developer/ventura_gray_5:3.png";
import img9 from "../../../../../public/developer/iscuma-dog_gray_5:3.png";
import img10 from "../../../../../public/developer/quatrocantos_gray_5:3.png";
import img11 from "../../../../../public/developer/ekaut_gray_5:3.png";
import img12 from "../../../../../public/developer/estrada_gray_5:3.png";
import img13 from "../../../../../public/developer/pernambucana_gray_5:3.png";
import img14 from "../../../../../public/developer/carranca_gray_5:3.png";
import img15 from "../../../../../public/developer/malakoff_gray_5:3.png";
import img16 from "../../../../../public/developer/capibabier_gray_5:3.png";
import img17 from "../../../../../public/developer/cavallotti_gray_5:3.png";
import img18 from "../../../../../public/developer/marcolino_gray_5:3.png";
import img19 from "../../../../../public/developer/hellcife_gray_5:3.png";
import img20 from "../../../../../public/developer/debron_gray_5:3.png";
import img21 from "../../../../../public/developer/patrlou_gray_5:3.png";
import img22 from "../../../../../public/developer/grunsbeir_gray_5:3.png";
import img23 from "../../../../../public/developer/doutorado-do-chopp_gray_5:3.png";
import img24 from "../../../../../public/developer/babylon_gray_5:3.png";
import img25 from "../../../../../public/developer/seispunhos_gray_5:3.png";

import Image, { StaticImageData } from "next/image";
import Brewery from "../../../entity/brewery";

import { Bebas_Neue } from "next/font/google"

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: '400'});

type CarouselProps = {
    breweries?: Brewery[];
}

export const BreweryCarousel: React.FunctionComponent<CarouselProps> = (props: CarouselProps) => {

    const imgs: StaticImageData[] = [img1 ,img2 ,img3 ,img4 ,img5 ,img6 ,img7 ,img8 ,img9 ,img10 ,img11 ,img12 ,img13 ,img14 ,img15 ,img16 ,img17 ,img18 ,img19 ,img20 ,img21 ,img22 ,img23 ,img24 ,img25];

    const currentImgs: StaticImageData[] = getRandomElements(imgs, 6);
    
    return (<>
    <h1 className={"highway-title "+bebas_Neue.className}>Cervejarias parceiras</h1>
    <div id="infinite" className="highway-wrapper">
        <div className="highway-container">
            <ul className="highway-lane">
                {
                    [...(new Array(12))].map((_, i) => {
                        return <li className="highway-element" key={i}>
                            <Image src={currentImgs[i%6].src} alt="" width={250} height={150}></Image>
                        </li>;
                    })
                }

            </ul>
        </div>
    </div></>);
}


function getRandomElements<T>(arr: T[], count: number): T[] {
    let shuffled = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}