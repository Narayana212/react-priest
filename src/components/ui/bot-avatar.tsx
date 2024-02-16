import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";

interface BotAvatarProps {
  src: string;
};

export const BotAvatar = ({
  src
}: BotAvatarProps) => {
  return (
    <Image
    src={src}
    alt="Narayana"
    width="192"
    height="192"
    quality="100"
    
    className="h-14 w-14 rounded-full border-[0.35rem] shadow-xl object-cover border-white"
  />
  );
};