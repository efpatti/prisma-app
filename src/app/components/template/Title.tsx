import { ElementType } from "react";
export interface TitleProps {
 primary: string;
 secondary: string;
 icon: ElementType;
}

export default function Title(props: TitleProps) {
 return (
  <div className="flex gap-2">
   <props.icon size={50} stroke={1} />
   <div className="flex flex-col">
    <h1 className="text-2xl font-black">{props.primary}</h1>
    <h1 className="text-zinc-400">{props.secondary}</h1>
   </div>
  </div>
 );
}
