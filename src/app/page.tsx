"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, GithubIcon, Linkedin, LinkedinIcon, Twitter, TwitterIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";



export default function Home() {
  
  return (
    <main className="flex flex-col h-screen justify-center items-center px-4">
        <section
      
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://res.cloudinary.com/diynkxbpc/image/upload/v1697554316/imahe_wyvilo.jpg"
              alt="Narayana"
              width="192"
              height="192"
              quality="95"
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] shadow-xl object-cover border-white"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Narayana.</span> Your {" "}
        <span className="font-bold">CR candidate</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="/chat" className={buttonVariants()}>
          Chat with me
        </Link>
        

        <a
          className={buttonVariants({variant:"secondary"})}
          href="/CV.pdf"
          download

        >
          Download my Manifesto{" "}
          <Download className="h-4 w-4 ml-2" />
        </a>

        <Link
          className="bg-gray-100 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/raavi-narayana-1a048a240"
          target="_blank"
        >
          <Linkedin className="h-4 w-4 " />
        </Link>

        <Link
          className="bg-gray-100 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Narayana212"
          target="_blank"
        >
          <GithubIcon  className="h-4 w-4 "/>
        </Link>
        <Link
          className="bg-gray-100 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://twitter.com/R_L_Narayana"
          target="_blank"
        >
          <Twitter  className="h-4 w-4 "  />
        </Link>
      </motion.div>
    </section>
    </main>
  );
}