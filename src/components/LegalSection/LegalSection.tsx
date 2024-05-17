import React, { useEffect, useState } from "react";
import "./LegalSection.css";
import arrow from "../../../public/icon/arrow.svg";
import Image from "next/image";

export type LegalSection = {
  title: string;
  content: string;
}

export const LegalSection: React.FunctionComponent<LegalSection> = ({ title, content }: LegalSection) => {

  const [isExpanded, setExpanded] = useState(false);


  return <section className="legal-section-container">
    <h2 className="legal-section-title" onClick={() => setExpanded(s => !s)}>
      <Image src={arrow.src} alt="Arrow" width={32} height={32} className={`legal-section-title-arrow-icon ${isExpanded?"rotate-0":"rotate-180"}`}></Image>
      <span>{title}</span>
    </h2>
    {isExpanded && <p className="legal-section-description">{content}</p>}
  </section>;
}