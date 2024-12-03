"use client";

import { motion } from "motion/react";
import {
  FiGithub,
} from "react-icons/fi";
import { FaChrome, FaAws  } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiBootstrap,
  SiReact,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiReacthookform,
  SiTailwindcss,
  SiGraphql,
  SiApollographql,
  SiFramer,
  SiStyledcomponents,
  SiReactquery,
  SiGit,
  SiNotion,
  SiPostman,
} from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiMongodb } from "react-icons/di";

const skills = {
  technologies: [
    { name: "Html5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "SCSS", icon: SiSass },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "ReactJS", icon: SiReact },
    { name: "NextJS", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: RiSupabaseLine },
    { name: "AWS", icon: FaAws },
    { name: "MongoDB", icon: DiMongodb },
    { name: "React Hook Forms", icon: SiReacthookform },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Apollo GraphQL", icon: SiApollographql },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Styled Components", icon: SiStyledcomponents },
    { name: "React Query", icon: SiReactquery },
    { name: "Git", icon: SiGit },
  ],
  developmentTools: [
    { name: "Github", icon: FiGithub },
    { name: "Chrome", icon: FaChrome },
    { name: "Visual Studio Code", icon: VscVscode },
    { name: "Notion", icon: SiNotion },
    { name: "Postman", icon: SiPostman },
  ],
};

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-yellow-500">Ski</span>lls
        </motion.h2>

        <div className="space-y-16">

          {/* Technologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-center mb-8"
            >
              <span className="text-yellow-500">Technologies</span> I Use
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {skills.technologies.map((Tech, index) => (
                <motion.div
                  key={Tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <Tech.icon className="w-6 h-6" />
                  <span>{Tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Development Tools */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-center mb-8"
            >
              <span className="text-yellow-500">Development & Productivity</span> Tools I Use
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {skills.developmentTools.map((Tool, index) => (
                <motion.div
                  key={Tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <Tool.icon className="w-6 h-6" />
                  <span>{Tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
