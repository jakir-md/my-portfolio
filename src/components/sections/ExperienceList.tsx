"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Trophy, Calendar } from "lucide-react";

export function ExperienceList() {
    const { nexovate, projects } = portfolioData;

    const experiences = [
        {
            title: nexovate.role,
            company: nexovate.company,
            description: nexovate.description,
            type: "work",
            date: "2023 - Present",
            icon: <Briefcase className="w-5 h-5" />,
        },
        {
            title: projects[2].title, // Micro-Ops
            company: "CUET Hackathon",
            description: projects[2].description,
            type: "award",
            date: "2024",
            icon: <Trophy className="w-5 h-5" />,
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
                <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 before:absolute before:left-[1.35rem] before:top-8 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-800 last:before:hidden"
                >
                    <div className="absolute left-0 top-0 p-3 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm z-10 text-primary">
                        {exp.icon}
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{exp.date}</span>
                            </div>
                        </div>
                        <p className="font-bold text-primary mb-3">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                            {exp.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
