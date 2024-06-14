import React from "react";
import "./card.css";

export type Publication = {
  author: string;
  publication_date: string;
  summary: string;
};

export const Card: React.FunctionComponent<Publication> = (props: Publication) => {
  return <div className="max-w-md mx-auto mt-8 in">
  <div className="card swing-in-top-fwd w-full">
      <div className="flex items-center mt-4">
          <div className="profile-icon mr-2">{props.author.toUpperCase().at(0)}</div>
          <p className="author">Por <span className="font-semibold">{props.author}</span></p>
      </div>
      <p className="text-gray-300 my-2">{props.summary}</p>
      <p className="text-gray-400 text-sm mb-4">Publicado em {props.publication_date}</p>
      
  </div>
</div>
}