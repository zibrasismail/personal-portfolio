"use client";

import { motion } from "motion/react"
import { Download } from "lucide-react";

export default function Info() {
  return (
    <section id="info" className="py-5 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/90 dark:bg-white/5 rounded-3xl p-6 md:p-12"
        >
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-white/90 dark:text-white/80 leading-relaxed"
            >
              A passionate Front End Developer with a Bachelor&apos;s in Information Technology & Management and over 1 years of experience in crafting captivating 
              digital experiences. My expertise lies in leveraging cutting-edge technologies such as ReactJS, NextJS, Apollo GraphQL, Redux, 
              React Query, Node JS, Express JS, Hono and various UI frameworks including Material UI, NextUI and Tailwind CSS. I take pride in 
              my ability to design seamless user interfaces and components that align perfectly with the intended aesthetic, creating 
              responsive websites that adapt gracefully to any device. My skill set also extends to proficient API integration, ensuring the 
              seamless flow of data between the front end and back end. In addition, I am known for writing clean, well-structured code that 
              not only functions flawlessly but also enhances the overall maintainability of projects. I am committed to pushing the boundaries of web development to 
              deliver exceptional digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-medium transition-colors"
              >
                <Download className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}