import Image from "next/image";
import React from "react";
import "./breweries.css";

export const Breweries: React.FunctionComponent<{ names: string[] }> = ({ names }) => {

    return <div className="brewery-container">
        {
            names.map((name, index) => {
                return <Image
                    key={index}
                    src={`/api/image?name=${name}&colorType=gray&aspectRatio=5:3&type=brewery`}
                    alt={`Logo da cervejaria ${name} em escala de cinza`}
                    width={250}
                    height={150}
                ></Image>
            })
        }
    </div>
}