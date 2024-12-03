"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";

const technologies = [
  {
    name: "ReactJS",
    icon: SiReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "React Hook Forms",
    icon: RiReactjsLine,
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Portfolio Made with
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2"
              >
                {typeof tech.icon === "string" ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ) : (
                  <tech.icon className="w-5 h-5" />
                )}
                <span className="text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 bg-yellow-500/10 backdrop-blur-sm rounded-full px-6 py-3"
        >
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <span className="font-bold">ZI</span>
          </div>
          {/* <span className="text-yellow-500">ZibrasIsmail</span> */}
          <div className="flex-1" />
          <span className="text-sm">
            Designed & Built by{" "}
            <span className="text-yellow-500">Zibras Ismail</span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
