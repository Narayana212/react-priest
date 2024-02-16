"use client";

import { BeatLoader } from "react-spinners";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BotAvatar } from "./ui/bot-avatar";
import { Loader2, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface ChatMessageProps {
  role: "system" | "user";
  content?: string;
  isLoading?: boolean;
  src?: string;
}

export const ChatMessage = ({
  role,
  content,
  isLoading,
  src,
}: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "group flex items-start gap-x-3 py-4 w-full",
        role === "user" && "justify-end"
      )}
    >
      {role !== "user"  && (
        <BotAvatar src="https://res.cloudinary.com/diynkxbpc/image/upload/v1697554316/imahe_wyvilo.jpg" />
      )}
      <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
        {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : content}
      </div>
      {role === "user" && (
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>
            <User/>
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
