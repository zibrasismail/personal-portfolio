"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTelegram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/zibras-ismail",
    color: "text-[#0A66C2]",
    hoverColor: "hover:bg-[#0A66C2]",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    link: "https://www.instagram.com/zibrasismail",
    color: "text-[#E4405F]",
    hoverColor: "hover:bg-[#E4405F]",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/zibrasismail",
    color: "text-[#1877F2]",
    hoverColor: "hover:bg-[#1877F2]",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    link: "https://t.me/Zibbu",
    color: "text-[#26A5E4]",
    hoverColor: "hover:bg-[#26A5E4]",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    link: "https://x.com/zibisismail",
    color: "text-[#1DA1F2]",
    hoverColor: "hover:bg-[#1DA1F2]",
  },
  {
    name: "Gmail",
    icon: SiGmail,
    link: "mailto:mohamedzibras2015@gmail.com",
    color: "text-[#EA4335]",
    hoverColor: "hover:bg-[#EA4335]",
  },
];

export default function Connect() {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Connect With <span className="text-yellow-500">Me</span>
        </motion.h2>

        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={social.link}
                  target="_blank"
                  className={`flex items-center gap-2 bg-white/5 ${social.hoverColor} px-6 py-3 rounded-full transition-colors group`}
                >
                  <social.icon className={`w-5 h-5 ${social.color} group-hover:text-white transition-colors`} />
                  <span className="group-hover:text-white">{social.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
