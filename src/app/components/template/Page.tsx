import { ReactNode } from "react";
import Menu from "./Menu";

export interface PageProps {
 children: ReactNode;
}

export function Page(props: PageProps) {
 return (
  <div className="flex">
   <Menu />
   <main className="flex-1 p-7">{props.children}</main>
  </div>
 );
}
