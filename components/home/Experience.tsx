"use client";

import { motion } from "motion/react";
import { MapPin, CalendarClock, CheckCircle2, Briefcase } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Freelance",
    location: "Remote",
    period: "PRESENT",
    role: "Full Stack Developer",
    points: [
      "Developed and delivered multiple full-stack web applications using Next.js, React.js, and Node.js, providing end-to-end solutions for clients.",
      "Implemented SaaS platforms with subscription-based models using Stripe integration and user management systems.",
      "Created responsive and modern UI/UX designs using Tailwind CSS and Framer Motion for enhanced user experience.",
      "Built secure REST APIs with Next.js API routes and MongoDB, implementing authentication and authorization.",
      "Managed entire project lifecycles from requirement gathering to deployment and maintenance."
    ]
  },
  {
    company: "ACCELR",
    location: "Colombo, Sri Lanka",
    period: "JANUARY 2022 - JULY 2022",
    role: "Intern Software Engineer",
    points: [
      "Contributed to the development of responsive landing pages using React.js and modern CSS frameworks, improving user engagement and site performance.",
      "Developed and maintained backend services using Java Spring Boot, implementing RESTful APIs and business logic for enterprise applications.",
      "Implemented comprehensive API documentation using Swagger/OpenAPI, ensuring clear documentation and easier integration for team members.",
      "Collaborated with the team using Git version control, managing feature branches, pull requests, and maintaining clean commit history.",
      "Participated in code reviews and implemented feedback to improve code quality and maintain coding standards."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-yellow-500">Exp</span>erience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: expIndex * 0.2 }}
              className="bg-black/90 dark:bg-white/5 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                    {exp.company === "ACCELR" ? (
                      <Image
                        src="/accelr.png"
                        alt={exp.company}
                        width={36}
                        height={36}
                        className="object-contain"
                        quality={100}
                        priority
                      />
                    ) : (
                      <Briefcase className="w-6 h-6 text-yellow-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="md:ml-auto mt-4 md:mt-0">
                  <div className="bg-yellow-500/20 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                    <CalendarClock className="w-4 h-4" />
                    <span className="text-xs md:text-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm md:text-md bg-white/10 px-4 py-1.5 rounded-full font-bold text-white">
                    {exp.role}
                  </h4>
                </div>
              </div>

              {/* Experience Points */}
              <div className="space-y-3">
                {exp.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-sm md:text-base text-white/80">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
