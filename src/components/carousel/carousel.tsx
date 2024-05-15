import React, { ReactNode } from "react";
import "./carousel.css";


import { Bebas_Neue } from "next/font/google"

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: '400' });

export const BreweryCarousel: React.FunctionComponent<{ children: ReactNode, title: string }> = ({ children, title }) => {

    return (<>
        <h1 className={"carousel-title " + bebas_Neue.className}>{title}</h1>
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <div className="carousel-lane">
                    {children}
                    {children}
                </div>
            </div>
        </div></>);
}