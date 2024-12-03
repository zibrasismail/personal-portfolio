"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="min-h-screen pt-20 lg:pt-0 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent dark:from-yellow-500/10" />
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-3xl dark:bg-yellow-500/10" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block text-4xl lg:text-5xl mb-2">
                👋
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Hello! I&apos;m <span className="text-yellow-500">Zibras Ismail</span>
              </h1>
            </div>
            <h2 className="text-xl lg:text-2xl mb-6">
              A Full Stack Developer
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              with <span className="bg-yellow-500/20 px-3 py-1 rounded-full">1+ Years</span> Experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="h-4 w-4" /> Resume
              </Button>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                onClick={() => window.location.href = "#contact"}
              >
                Hire Me
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
              <Image
                src="/profile.jpg"
                alt="Nikunj Thesiya"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            
            <div className="absolute -z-10 animate-float">
              <div className="tech-bubble top-0 left-0">
                <Image src="/nextjs.svg" alt="NextJS" width={40} height={40} />
                <span>NextJS</span>
              </div>
              <div className="tech-bubble top-20 right-0">
                <Image src="/tailwind.svg" alt="Tailwind CSS" width={40} height={40} />
                <span>Tailwind CSS</span>
              </div>
              <div className="tech-bubble bottom-20 left-0">
                <Image src="/react.svg" alt="ReactJS" width={40} height={40} />
                <span>ReactJS</span>
              </div>
              <div className="tech-bubble bottom-0 right-20">
                <Image src="/javascript.svg" alt="JavaScript" width={40} height={40} />
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}