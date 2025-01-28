import users from "@/data/constants/users";
import LineUser from "./LineUser";
import { User } from "@/core/model/User";

export default function UsersList() {
 return (
  <div className="flex flex-col gap-4">
   {users.map((user: User) => (
    <LineUser key={user.id} user={user} />
   ))}
  </div>
 );
}
