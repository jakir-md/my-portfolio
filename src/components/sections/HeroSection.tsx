"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Download,
  Mail,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const itemVariants = {};

import Image from "next/image";
export function HeroSection({
  onContactClick,
}: {
  onContactClick?: () => void;
}) {
  const { personal } = portfolioData;

  const stats = [
    { label: "Years of Experience", value: "1+" },
    { label: "Projects Delivered", value: "3+" }, // Count school, hackathon, and work projects
    { label: "Technologies Mastered", value: "12+" }, // JS, React, Next, Node, SQL, Git, etc.
  ];

  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col md:flex-row items-center text-center space-y-6 max-w-2xl gap-5 md:gap-10 mx-auto">
        <motion.div variants={itemVariants} className="relative">
          <div className="w-40 h-40 rounded-full border-4 border-primary flex items-center justify-center p-1 bg-white dark:bg-gray-800 shadow-xl">
            <Image
              alt="Md Jakir Hossain Professional Portrait"
              className="w-full h-full rounded-full object-cover"
              src={"/profile.jpg"}
              width={160}
              height={160}
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-300">
            {personal.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            {personal.role}
          </p>

          <div className="flex items-center justify-center space-x-6 pt-3 text-gray-900 dark:text-white">
            <a
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
              href="https://github.com/jakir-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/jakir-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              aria-label="Email"
              className="hover:text-primary transition-colors"
              href="mailto:mdjakir.cse.ju@gmail.com"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </section>
      <div>
        <div className="flex flex-col items-center ">
          <div className="grid grid-cols-3 gap-8 pt-4 w-full mb-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-left"
              >
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a
              className="flex items-center justify-center gap-2 bg-primary hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-2xl transition-all shadow-md"
              href="https://docs.google.com/document/d/1Ha4UwOerjybvtYO4lTFtpOUVOG3m6RPKNimN7e75paI/export?format=pdf"
            >
              <span>Download CV</span>
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
