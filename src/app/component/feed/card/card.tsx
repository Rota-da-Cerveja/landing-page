import React from "react";
import "./card.css";

export type Publication = {
  title: string;
  author: string;
  publication_date: string;
  summary: string;
};

export const Card: React.FunctionComponent<Publication> = (props: Publication) => {
  return <div className="max-w-md mx-auto mt-8">
  <div className="card">
      <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-400 text-sm mb-4">Publicado em {props.publication_date}</p>
      <p className="text-gray-300">{props.summary}</p>
      
      <div className="flex items-center mt-4">
          <div className="profile-icon mr-2">{props.author.toUpperCase().at(0)}</div>
          <p className="author">Por <span className="font-semibold">{props.author}</span></p>
      </div>
  </div>
</div>
}