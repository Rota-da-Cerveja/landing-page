import Image from "next/image";
import React from "react";

type SocialProp = {
  src: any;
  href?: string;
}

export const Social: React.FunctionComponent<SocialProp> = (props: SocialProp) => {
  return(<a className="p-2 cursor-pointer rounded-md border border-black transition-colors hover:border-primary hover:bg-primary" href={props.href}>
  <Image src={props.src} alt="background" width={30}></Image>
</a>);
}