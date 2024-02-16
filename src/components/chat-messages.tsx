"use client";

import { ElementRef, useEffect, useRef, useState } from "react";


import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: any;
  isLoading: boolean;
}

export const ChatMessages = ({
  messages = [],
  isLoading,
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);

  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        src={"https://res.cloudinary.com/diynkxbpc/image/upload/v1697554316/imahe_wyvilo.jpg"}
        role="system"
        content={`Hello, I am Raavi Lakshmi Narayana,  your CR candidate shoot your questions regarding my CR candidarure`}
      />
      {messages.map((message:any) => (
        <ChatMessage
          key={message.content}
          src={""}
          content={message.content}
          role={message.role}
        />
      ))}
      {isLoading && (
        <ChatMessage
          src={"https://res.cloudinary.com/diynkxbpc/image/upload/v1697554316/imahe_wyvilo.jpg"}
          role="system"
          isLoading
        />
      )}
      <div ref={scrollRef} />
    </div>
  );
};
