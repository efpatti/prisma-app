import { ReactNode } from "react";
import Menu from "./Menu";

export interface PageProps {
 children: ReactNode;
 className?: string;
}

export function Page(props: PageProps) {
 return (
  <div className="flex">
   <Menu />
   <main className={`flex-1 p-7 ${props.className}`}>{props.children}</main>
  </div>
 );
}
