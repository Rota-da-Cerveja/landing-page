import React from "react";
import "./About.css";
import { Bebas_Neue } from "next/font/google"
import Image, { StaticImageData } from "next/image";

export type Paragraph = {
    text: string;
    image: StaticImageData;
    description?: string;
}

type AboutProps = {
    title?: string;
    paragraphs: Paragraph[];
}

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: '400' });

export const About: React.FunctionComponent<AboutProps> = (props: AboutProps) => {
    return (<section className="about-wrapper">
        <h1 className={`about-title ${bebas_Neue.className}`}>{props.title || "Sobre a Rota Da Cerveja"}</h1>
        <div className="about-container">
            {props.paragraphs.map((data, index) => {
                return <ParagraphComponent key={index} {...data}></ParagraphComponent>
            })}
        </div>
    </section >);
}


const ParagraphComponent: React.FunctionComponent<Paragraph> = (props: Paragraph) => {
    return (<div className="about-paragraph-container">
        <p className="about-description">
            {props.text}
        </p>
        <div className="about-image-container">
            <Image className="about-image" src={props.image.src} alt={props.description || ""} width={props.image.width} height={props.image.height}></Image>
        </div>
    </div>);
}