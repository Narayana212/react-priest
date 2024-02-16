"use client";
import { ChevronLeft, Edit, MessagesSquare, MoreVertical, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { BotAvatar } from "./ui/bot-avatar";





export const ChatHeader = ()=> {
  const router = useRouter();
 
  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => router.back()} size="icon" variant="ghost">
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <BotAvatar src="https://res.cloudinary.com/diynkxbpc/image/upload/v1697554316/imahe_wyvilo.jpg"/>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold">Raavi Lakshmi Narayana</p>
            <div className="flex items-center text-xs text-muted-foreground">
             
             CR Candidate
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};