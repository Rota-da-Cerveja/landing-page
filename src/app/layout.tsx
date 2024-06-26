import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/app/component/footer/footer";
import { NavegationBar } from "@/app/component/navegation/bar";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rota da Cerveja",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <NavegationBar></NavegationBar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
