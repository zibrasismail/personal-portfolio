"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin, Building2 } from "lucide-react";

const educationData = [
  {
    period: "2018 - 2023",
    type: "Bachelor's Graduation",
    degree: "Bachelor's Degree",
    course: "ITM",
    title: "Information Technology & Management",
    university: "University of Moratuwa",
    location: "Katubedda, Moratuwa, Sri Lanka"
  },
  {
    period: "2017 - 2020",
    type: "Higher Diploama",
    degree: "Higher Diploma",
    course: "Higher Diploma in Accounting & Finance",
    title: "Higher Diploma in Accounting & Finance",
    university: "The Association of Accounting Technicians Business School",
    location: "Colombo, Sri Lanka"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-yellow-500">Edu</span>cation
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/90 dark:bg-white/5 rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Period Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                {edu.period}
              </div>

              {/* Type Badge */}
              <div className="absolute top-8 right-8 hidden md:flex bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-yellow-500" />
                <span>{edu.type}</span>
              </div>
              {/* Mobile Type Badge */}
              <div className="md:hidden flex bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium items-center gap-1.5 mb-4">
                <GraduationCap className="w-4 h-4 text-yellow-500" />
                <span>{edu.type}</span>
              </div>

              {/* Degree Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs md:text-sm">
                  {edu.degree}
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs md:text-sm">
                  {edu.course}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition-colors">
                {edu.title}
              </h3>

              {/* University and Location */}
              <div className="space-y-2 text-white/80">
                <div className="flex items-start md:items-center gap-2">
                  <Building2 className="w-4 h-4 text-yellow-500 shrink-0 mt-1 md:mt-0" />
                  <span className="text-sm md:text-base">{edu.university}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-500 shrink-0" />
                  <span className="text-sm md:text-base">{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
