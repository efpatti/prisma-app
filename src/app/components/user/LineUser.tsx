"use client";
import { User } from "@/core/model/User";
import Image from "next/image";

export interface LineUserProps {
 user: User;
}

export default function LineUser({ user }: LineUserProps) {
 return (
  <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg">
   <Image
    src="https://cultivatedculture.com/wp-content/uploads/2019/12/Austin-Portrait-Taken-By-Professional-Photographer.png"
    width={80}
    height={80}
    alt="User Avatar"
    className="w-20 h-20 rounded-full object-cover"
    loader={({ src }) => src} // Allows loading external URLs
   />
   <div className="flex flex-col">
    <span className="text-white text-2xl font-medium">{user.name}</span>
    <span className="text-lg text-zinc-400">{user.email}</span>
   </div>
  </div>
 );
}
