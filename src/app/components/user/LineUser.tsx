import { User } from "@/core/model/User";

export interface LineUserProps {
 user: User;
}

export default function LineUser(props: LineUserProps) {
 return (
  <div className="flex p-4">
   <span>{props.user.name}</span>
  </div>
 );
}
