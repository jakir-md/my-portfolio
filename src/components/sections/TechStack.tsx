"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const getIconUrl = (skill: string) => {
    const mapping: Record<string, string> = {
        "Next.js 16 (App Router)": "nextdotjs",
        "React 19": "react",
        "Tailwind css": "tailwindcss",
        "Framer Motion": "framer",
        "Shadcn UI": "shadcnui",
        "TypeScript": "typescript",
        "PostgreSQL & Prisma": "postgresql",
        "MongoDB & Mongoose": "mongodb",
        "Git & GitHub Workflow": "github",
        "Node.js": "nodedotjs",
        "Express.js": "express",
        "Prisma": "prisma",
        "Mongoose": "mongoose",
        "HTML5": "html5",
        "CSS3": "css3",
    };
    const icon = mapping[skill] || skill.toLowerCase().replace(/ /g, "").split("(")[0].split("&")[0].trim();
    return `https://cdn.simpleicons.org/${icon}`;
};

export function TechStack() {
    const { skills } = portfolioData;

    return (
        <section className="mt-16 py-10 px-6 max-w-5xl mx-auto">
            <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-12">Building with modern tools</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-12 gap-x-4">
                {skills.map((skill) => (
                    <motion.div
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-3 group cursor-default"
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 p-3">
                            <img
                                src={getIconUrl(skill)}
                                alt={skill}
                                className="w-full h-full object-contain dark:invert transition-all group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill}&background=random&color=fff&size=48`;
                                }}
                            />
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center">{skill}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
