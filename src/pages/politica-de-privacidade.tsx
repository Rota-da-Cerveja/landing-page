import { LegalSection } from "@/components/LegalSection/LegalSection";
import { Footer } from "@/components/footer/footer";
import { Metadata } from "next";
import React from "react";
import "./politica-de-privacidade.css";
import { HeaderBar } from "@/components/header/bar/HeaderBar";

export const metadata: Metadata = {
    title: 'Politica de Privacidade'
}

const legalSection: LegalSection[] = [
    {
        title: "Coleta de Informações",
        content: "Durante a sua interação com o site da Rota da Cerveja, podemos coletar informações pessoais, como nome, e-mail, idade e preferências de cerveja. Essas informações são fornecidas voluntariamente por você ao se inscrever em nossa newsletter, participar de promoções ou utilizar nossos serviços."
    },
    {
        title: "Uso de Informações",
        content: "As informações coletadas são utilizadas para personalizar sua experiência no site, fornecer conteúdo relevante sobre cervejas, eventos e roteiros cervejeiros, além de melhorar nossos produtos e serviços."
    },
    {
        title: "Proteção de Informações",
        content: "Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação. Seus dados são armazenados de forma segura e só são acessados por pessoas autorizadas."
    },
    {
        title: "Cookies",
        content: "Utilizamos cookies para melhorar a sua experiência de navegação no site. Os cookies são pequenos arquivos de texto que são armazenados no seu dispositivo e nos ajudam a entender como você utiliza o site, para que possamos fazer melhorias."
    },
    {
        title: "Compartilhamento de Informações",
        content: "Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, exceto quando necessário para fornecer os serviços solicitados por você ou quando exigido por lei."
    },
    {
        title: "Consentimento",
        content: "Ao utilizar o site da Rota da Cerveja, você concorda com a coleta e o uso das suas informações pessoais de acordo com esta Política de Privacidade."
    },
    {
        title: "Alterações na Política de Privacidade",
        content: "Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página."
    }
];

const politicadeprivacidade: React.FunctionComponent = () => {
    return <>
        <HeaderBar></HeaderBar>
        <main className="privacy-policy-wrapper">
            <h1 className="privacy-policy-title">Política de Privacidade</h1>
            <div className="privacy-policy-container">
                {legalSection.map(({ title, content }: LegalSection, index) =>
                    <LegalSection title={title} content={content} key={index}></LegalSection>
                )}
            </div>
            <h1 className="privacy-policy-title">Termos de uso</h1>
        </main>
        <Footer></Footer>
    </>;
}

export default politicadeprivacidade;