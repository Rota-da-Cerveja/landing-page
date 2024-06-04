import React from "react";
import "./beerCard.css";

export type BeerProps = {
  src: string;
  name: string;
  description: string;
};

export const BeerCard: React.FunctionComponent<BeerProps> = ( props : BeerProps) => {
  return <div className="max-w-md mx-auto mt-8">
    <div className="beer-card">
      <img src={props.src || "https://via.placeholder.com/300x200"} alt="Cerveja Artesanal" className="beer-image"/>
        <h2 className="beer-name mt-2">{props.name}</h2>
        <p className="beer-description">{props.description}</p>
    </div>
  </div>
}