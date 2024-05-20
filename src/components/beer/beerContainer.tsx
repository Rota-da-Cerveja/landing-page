import React from "react";
import "./beerContainer.css";
import { Bebas_Neue } from "next/font/google";
import { Beer } from "./beer";

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: '400' });

export const BeerContainer: React.FunctionComponent = () => {
  return<section className="recommendation-wrapper">
    <h1 className={`recommendation-title ${bebas_Neue.className}`}>Recomendações do dia</h1>
    <div className="recommendation-container">
      <Beer></Beer>
    </div>
  </section>
}