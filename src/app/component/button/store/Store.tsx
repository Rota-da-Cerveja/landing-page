import Image from "next/image";
import React from "react";

type StoreProp = {
  icon: any;
  title: string;
  subtitle?: string;
};

export const StoreButton: React.FunctionComponent<StoreProp> = (prop: StoreProp) => {
  return(<a className="flex w-max items-center transition-colors bg-black hover:bg-primary hover:border-primary gap-3 border px-4 py-1 rounded-md justify-self-center cursor-pointer">
    <Image src={prop.icon} alt={""} height={30}></Image>
    <div>
      <p className="flex font-normal normal-case text-xs">{prop.subtitle || "Disponível no"}</p>
      <p className="text-base font-bold capitalize tracking-wide">{prop.title}</p>
    </div>
  </a>);
}