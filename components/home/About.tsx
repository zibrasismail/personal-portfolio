"use client";

import { Headphones, Car, Mountain, Wallet } from "lucide-react";
import { motion } from "motion/react"

const stats = [
  {
    value: "1+",
    label: "Years Experience"
  },
  {
    value: "5+",
    label: "Project Completed"
  }
];

const interests = [
  {
    icon: Headphones,
    label: "Listening to Music",
    bgColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    icon: Car,
    label: "Travelling",
    bgColor: "bg-gray-100 dark:bg-gray-900/20"
  },
  {
    icon: Mountain,
    label: "Mountains",
    bgColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    icon: Wallet,
    label: "Money",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-yellow-500/20 to-transparent dark:from-yellow-500/10" />
        <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-3xl dark:bg-yellow-500/10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About <span className="text-yellow-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                ❤️
              </span>
              I Love
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`${interest.bgColor} rounded-full py-2 px-4 flex items-center gap-2`}
                >
                  <interest.icon className="w-5 h-5" />
                  <span>{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-black/90 dark:bg-white/5 rounded-3xl p-8 text-center"
              >
                <h4 className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</h4>
                <p className="text-white dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}