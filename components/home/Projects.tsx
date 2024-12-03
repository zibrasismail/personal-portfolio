"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiReacthookform,
  SiPostgresql,
  SiZod
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";

const projects = [
  {
    title: "The Wild Oasis",
    description: "A Hotel Booking Web Application with Admin Panel",
    image: "/projects/Oasis.png",
    backgroundColor: "bg-black/40 backdrop-blur-sm",
    workedOn: ["Web Application", "Admin Panel"],
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React.js", icon: SiReact },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "ReactJS", icon: SiReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "Zod", icon: SiZod },
      { name: "Supabase", icon: RiSupabaseLine },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    link: "https://oasis-website-gold.vercel.app",
    githubLink: "https://github.com/zibrasismail/oasis-website",
  },
  {
    title: "AI Image Generator with Replicate AI",
    image: "/projects/ai-image.png",
    backgroundColor: "bg-black/40 backdrop-blur-sm",
    workedOn: ["Web Application"],
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Replicate AI" },

    ],
    link: "https://image-generator-replicateai.vercel.app",
    githubLink: "https://github.com/zibrasismail/image-generator-using-replicate-ai",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects I&apos;ve{" "}
          <span className="text-yellow-500">Worked on</span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
              className={`rounded-3xl overflow-hidden ${project.backgroundColor} border border-white/10 hover:border-yellow-500/50 transition-colors p-8`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-yellow-500">{project.title}</h3>
                    <button onClick={() => window.open(project.githubLink, "_blank")} className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </button>
                  </div>

                  {project.description && (
                    <p className="text-gray-400">{project.description}</p>
                  )}

                  <div>
                    <p className="text-sm text-gray-400 mb-2">Worked on</p>
                    <div className="flex gap-2">
                      {project.workedOn.map((item) => (
                        <span
                          key={item}
                          className="bg-white/5 hover:bg-white/10 px-4 py-1 rounded-full text-sm transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-2">
                      Technologies I have used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors"
                        >
                          {tech.icon && <tech.icon className="w-4 h-4" />}
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors group"
                  >
                    <span>Go to {project.title}</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://github.com/zibrasismail"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span>See Github</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
