import { User } from "@/core/model/User";

export interface LineUserProps {
 user: User;
}

export default function LineUser(props: LineUserProps) {
 return (
  <div className="flex flex-col p-4 bg-zinc-900 rounded-lg">
   <span>{props.user.name}</span>
   <span>{props.user.email}</span>
  </div>
 );
}
