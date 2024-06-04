'use client';

import React from "react";
import "./feed.css";
import { SelectMode } from "./selectMode/selectMode";
import { Card, Publication } from "./card/card";

const publications: Publication[] = [
  {
    title: "Explorando o Sabor: Degustação de Cervejas Artesanais",
    author: "Gustavo Silva",
    publication_date: "31 de maio de 2024",
    summary: "Uma jornada sensorial pelas nuances de sabores e aromas das cervejas artesanais."
  },
  {
    title: "Cerveja e Amigos: Uma Combinação Perfeita",
    author: "Ana Rodrigues",
    publication_date: "31 de maio de 2024",
    summary: "Compartilhando risadas e histórias enquanto degustamos cervejas únicas."
  },
  {
    title: "Craft Beer Fest: O Evento Imperdível para os Amantes de Cerveja",
    author: "Lucas Oliveira",
    publication_date: "31 de maio de 2024",
    summary: "Descobrindo novas cervejarias e celebrando a cultura cervejeira."
  },
  {
    title: "Cervejas Artesanais Locais: Uma Viagem Pelo Sabor Regional",
    author: "Isabela Santos",
    publication_date: "31 de maio de 2024",
    summary: "Provando cervejas feitas com ingredientes locais e apoiando pequenos produtores."
  },
  {
    title: "Cerveja e Arte: A Harmonização Perfeita",
    author: "Rafael Mendes",
    publication_date: "31 de maio de 2024",
    summary: "Degustando cervejas enquanto admiramos obras de artistas locais."
  },
  {
    title: "Cerveja Artesanal em Casa: Receitas e Dicas",
    author: "Mariana Costa",
    publication_date: "31 de maio de 2024",
    summary: "Experimentando diferentes estilos e criando nossas próprias cervejas."
  },
  {
    title: "Cerveja e Gastronomia: Combinações Surpreendentes",
    author: "Pedro Almeida",
    publication_date: "31 de maio de 2024",
    summary: "Harmonizando cervejas com pratos deliciosos."
  },
  {
    title: "Cervejas Artesanais: Uma Jornada pelo Mundo dos Lúpulos",
    author: "Camila Ferreira",
    publication_date: "31 de maio de 2024",
    summary: "Explorando diferentes variedades de lúpulo e seus impactos no sabor da cerveja."
  },
  {
    title: "Cerveja e História: Tradições e Inovações",
    author: "André Nunes",
    publication_date: "31 de maio de 2024",
    summary: "Apreciando cervejas com raízes culturais profundas e experimentando novas criações."
  },
  {
    title: "Cerveja Artesanal: Uma Paixão que Conecta Pessoas",
    author: "Larissa Souza",
    publication_date: "31 de maio de 2024",
    summary: "Encontrando amigos em bares e festivais para celebrar a diversidade cervejeira."
  }
]


export const Feed: React.FunctionComponent = () => {
  return <section className="feed-wrapper">
    <SelectMode></SelectMode>

    <div className="feed-container">
      <div className="feed-viewport">
        {publications.map((p, i) => <Card {...p} key={i}></Card>)}
      </div>
    </div>
  </section>
}