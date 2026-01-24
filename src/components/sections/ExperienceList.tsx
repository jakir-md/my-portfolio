"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Trophy, Calendar, MapPin } from "lucide-react";

export function ExperienceList() {
  // Ideally, move this structural logic to your data file (see section 2 below)
  const { nexovate, projects } = portfolioData;

  // I'm structuring this here for now, but strictly this should be in your data file
  const experiences = [
    {
      id: "nexovate",
      title: nexovate.role,
      company: nexovate.company,
      // Split description into sentences for bullet points if it's a long string
      description: [nexovate.description],
      type: "work",
      date: "2025 - Present",
      location: "Hybrid", // Added location context
      tags: ["React", "Next.js", "TypeScript", "Postgresql"], // Example tags
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id} // Better to use ID than title
          initial={{ opacity: 0, y: 20 }} // changed to y for a subtle "rise" effect
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-12 before:absolute before:left-[1.35rem] before:top-8 before:bottom-0 before:w-[2px] before:bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-800 last:before:hidden"
        >
          {/* ICON BUBBLE */}
          <div
            className={`absolute left-0 top-0 p-3 rounded-2xl border shadow-sm z-10 
                        ${
                          exp.type === "work"
                            ? "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-primary"
                            : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800 text-yellow-600"
                        }`}
          >
            {exp.icon}
          </div>

          {/* CARD CONTENT */}
          <div className="p-6 md:p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-semibold text-primary">
                    {exp.company}
                  </span>
                  {exp.location && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Date Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full self-start">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-xs font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
            </div>

            {/* Description Logic: Handles Array or String */}
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6 space-y-2">
              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-4 space-y-1 marker:text-gray-300">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{exp.description}</p>
              )}
            </div>

            {/* Tech Stack Tags */}
            {exp.tags && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
